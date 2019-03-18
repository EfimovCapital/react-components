import * as React from "react";

// tslint:disable: no-bitwise

// Modified from https://github.com/ethereum/blockies
// License: https://github.com/ethereum/blockies#license (WTFPL)

interface Options {
  /**
   * The pixel resolution of the blocky. Default: 8.
   */
  size: number;

  /**
   * The canvas is scaled by this number to avoid aliasing. Default: 4.
   */
  scale: number;

  /**
   * Optional seed to generate blocky deterministically.
   */
  seed: string;

  /**
   * Optional foreground color. Default: Generated from seed.
   */
  color: string;

  /**
   * Optional background color. Default: Generated from seed.
   */
  bgColor: string;

  /**
   * Optional highlight color. Default: Generated from seed.
   */
  spotColor: string;
}

const blockies = () => {
  // The random number is a js implementation of the XOR-shift PRNG
  const randSeed = [0, 0, 0, 0]; // XOR-shift: [x, y, z, w] 32 bit values

  const seedRand = (seed: string) => {
    for (let i = 0; i < randSeed.length; i++) {
      randSeed[i] = 0;
    }
    for (let i = 0; i < seed.length; i++) {
      randSeed[i % 4] = ((randSeed[i % 4] << 5) - randSeed[i % 4]) + seed.charCodeAt(i);
    }
  };

  const rand = () => {
    // based on Java's String.hashCode(), expanded to 4 32bit values

    const t = randSeed[0] ^ (randSeed[0] << 11);

    randSeed[0] = randSeed[1];
    randSeed[1] = randSeed[2];
    randSeed[2] = randSeed[3];

    randSeed[3] = (randSeed[3] ^ (randSeed[3] >> 19) ^ t ^ (t >> 8));

    return (randSeed[3] >>> 0) / ((1 << 31) >>> 0);
  };

  const createColor = () => {
    // saturation is the whole color spectrum
    const h = Math.floor(rand() * 360);
    // saturation goes from 40 to 100, it avoids greyish colors
    const s = `${(rand() * 60) + 40}%`;
    // lightness can be anything from 0 to 100, but probabilities are a bell curve around 50%
    const l = `${((rand() + rand() + rand() + rand()) * 25)}%`;

    return `hsl(${h},${s},${l})`;
  };

  const createImageData = (size: number) => {
    const width = size; // Only support square icons for now
    const height = size;

    const dataWidth = Math.ceil(width / 2);
    const mirrorWidth = width - dataWidth;

    const data = [];
    for (let y = 0; y < height; y++) {
      let row = [];
      for (let x = 0; x < dataWidth; x++) {
        // this makes foreground and background color to have a 43% (1/2.3) probability
        // spot color has 13% chance
        row[x] = Math.floor(rand() * 2.3);
      }
      const r = row.slice(0, mirrorWidth);
      r.reverse();
      row = row.concat(r);

      for (const rowItem of row) {
        data.push(rowItem);
      }
    }

    return data;
  };

  // tslint:disable-next-line:no-any
  const buildOpts = (opts: Partial<Options>): Options => {
    // tslint:disable-next-line:no-any
    const newOpts: Partial<Options> = {};

    newOpts.size = opts.size || 8;
    newOpts.scale = opts.scale || 4;
    // tslint:disable-next-line:insecure-random
    newOpts.seed = opts.seed || Math.floor((Math.random() * Math.pow(10, 16)))
      .toString(16);

    seedRand(newOpts.seed);

    newOpts.color = opts.color || createColor();
    newOpts.bgColor = opts.bgColor || createColor();
    newOpts.spotColor = opts.spotColor || createColor();

    return newOpts as Options;
  };

  // tslint:disable-next-line:no-any
  const renderIcon = (optsIn: Partial<Options>, canvas: HTMLCanvasElement) => {
    const opts = buildOpts(optsIn || {});

    const imageData = createImageData(opts.size);
    const width = Math.sqrt(imageData.length);

    canvas.width = canvas.height = opts.size * opts.scale;

    const cc = canvas.getContext("2d");
    if (!cc) {
      return canvas;
    }
    cc.fillStyle = opts.bgColor;
    cc.fillRect(0, 0, canvas.width, canvas.height);
    cc.fillStyle = opts.color;

    for (let i = 0; i < imageData.length; i++) {

      // if data is 0, leave the background
      if (imageData[i]) {
        const row = Math.floor(i / width);
        const col = i % width;

        // if data is 2, choose spot color, if 1 choose foreground
        cc.fillStyle = (imageData[i] === 1) ? opts.color : opts.spotColor;

        cc.fillRect(col * opts.scale, row * opts.scale, opts.scale, opts.scale);
      }
    }
    return canvas;
  };

  const createIcon = (optsIn: Partial<Options>): HTMLCanvasElement => {
    const opts = buildOpts(optsIn || {});
    const canvas = document.createElement("canvas");

    renderIcon(opts, canvas);

    return canvas;
  };

  return {
    create: createIcon,
    render: renderIcon
  };
};

// tslint:enable

/**
 * Blocky is a visual component for displaying Ethereum blockies - visual hashes
 * of ethereum addresses
 */
export class Blocky extends React.Component<Props, State> {

  private canvas: HTMLCanvasElement | null | undefined;
  private readonly blocky = blockies();

  constructor(props: Props) {
    super(props);
    this.state = {
      loading: true,
    };
    this.canvas = null;
  }

  public getOpts = (address: string) => ({
    seed: address.toLowerCase(),
    size: 8,
    scale: 10,
  })

  public renderIcon = (address: string | null) => {
    if (address) {
      this.setState({ loading: false });
      this.blocky.create(this.getOpts(address));
      if (this.canvas) {
        this.blocky.render(this.getOpts(address), this.canvas);
      }
    } else {
      this.setState({ loading: true });
    }
  }

  public componentWillReceiveProps(props: Props) {
    this.renderIcon(props.address);
  }

  public componentDidMount() {
    this.renderIcon(this.props.address);
  }

  /**
   * The main render function.
   * @dev Should have minimal computation, loops and anonymous functions.
   */
  public render(): React.ReactNode {
    const { address } = this.props;
    const { loading } = this.state;
    return (
      <div className="blocky--outer">
        <div data-tip={address || "..."}>
          {loading ? <i className="fa fa-spin fa-spinner blocky__loading" /> : <i />}
          <canvas className="blocky" ref={this.setCanvas} />
        </div>
      </div>
    );
  }

  private readonly setCanvas = (canvas: HTMLCanvasElement) => this.canvas = canvas;
}

interface Props {
  address: string | null;
}

interface State {
  loading: boolean;
}
