import { Lightning, Utils, Registry } from "@lightningjs/sdk";
export type ColorValueHex = `${string}`;
export interface AppTemplateSpec extends Lightning.Component.TemplateSpec {
  Background: Object;
  ClockBG: {
    Clock: {
      Hours: {
        Text1: Object;
        Text2: Object;
        Text3: Object;
      };
      Minutes: {
        Text1: Object;
        Text2: Object;
        Text3: Object;
      };
      Seconds: {
        Text1: Object;
        Text2: Object;
        Text3: Object;
      };
    };
    Mode: {
      LogoBG: object;
      Logo: Object;
    };
  };
  Shadow: Object;
}
export interface App {
  modeUpdate: Boolean;
  ampm: string;
  modeSrc: string;
  myseconds: string;
  myhours: string;
  myminutes: string;
  backgroundColor: number;
  ClockBGColor: number;
  ClockColor: number;
  TextColor: number;
  LogoBGColor: number;
  shadowColor: number;
}

export class App
  extends Lightning.Component<AppTemplateSpec>
  implements Lightning.Component.ImplementTemplateSpec<AppTemplateSpec>
{
  /*
   * The following properties exist to make it more convenient to access elements
   * below in a type-safe way. They are optional.
   *
   * See https://lightningjs.io/docs/#/lightning-core-reference/TypeScript/Components/TemplateSpecs?id=using-a-template-spec
   * for more information.
   */
  readonly Background = this.getByRef("Background")!;
  readonly ClockBG = this.getByRef("ClockBG")!;

  static override _template(): Lightning.Component.Template<AppTemplateSpec> {
    return {
      w: 1920,
      h: 1080,
      Background: {
        w: 1920,
        h: 1080,
        color: this.bindProp("backgroundColor"),
        rect: true,
      },
      Shadow: {
        mount: 0.5,
        x: 955,
        y: 560,
        color: this.bindProp("shadowColor"),
        texture: Lightning.Tools.getShadowRect(950, 320, 20, 10, 20),
      },
      ClockBG: {
        w: 920,
        h: 300,
        mount: 0.5,
        x: 960,
        y: 550,
        color: this.bindProp("ClockBGColor"),
        rect: true,
        shader: { type: Lightning.shaders.RoundedRectangle, radius: 20 },
        Clock: {
          x: 100,
          Hours: {
            w: 150,
            h: 150,
            y: 75,
            x: 50,
            rect: true,
            color: this.bindProp("ClockColor"),
            // color: 0xffff0000,
            Text1: {
              x: 160,
              text: {
                text: ":",
                fontSize: 100,
                textAlign: "center",
                textColor: this.bindProp("TextColor"),
              },
            },
            Text2: {
              x: 25,
              text: {
                text: this.bindProp("myhours"),
                fontSize: 80,
                textAlign: "center",
                textColor: this.bindProp("TextColor"),
              },
            },
            Text3: {
              x: 35,
              y: 95,
              text: {
                text: "Hours",
                fontSize: 30,
                textAlign: "center",
                textColor: this.bindProp("TextColor"),
              },
            },
          },
          Minutes: {
            w: 150,
            h: 150,
            rect: true,
            y: 75,
            x: 250,
            color: this.bindProp("ClockColor"),
            // color: 0xffff0000,
            Text1: {
              x: 160,
              text: {
                text: ":",
                fontSize: 100,
                textAlign: "center",
                textColor: this.bindProp("TextColor"),
              },
            },
            Text2: {
              x: 35,
              text: {
                text: this.bindProp("myminutes"),
                fontSize: 80,
                textAlign: "center",
                textColor: this.bindProp("TextColor"),
              },
            },
            Text3: {
              x: 25,
              y: 95,
              text: {
                text: "Minutes",
                fontSize: 30,
                textAlign: "center",
                textColor: this.bindProp("TextColor"),
              },
            },
          },
          Seconds: {
            w: 150,
            h: 150,
            rect: true,
            y: 75,
            x: 450,
            color: this.bindProp("ClockColor"),
            // color: 0xffff0000,
            Text1: {
              x: 30,
              text: {
                text: this.bindProp("myseconds"),
                fontSize: 80,
                textAlign: "center",
                textColor: this.bindProp("TextColor"),
              },
            },
            Text2: {
              x: 20,
              y: 95,
              text: {
                text: "Seconds",
                fontSize: 30,
                textAlign: "center",
                textColor: this.bindProp("TextColor"),
              },
            },
            Text3: {
              x: 160,
              y: 10,
              text: {
                text: this.bindProp("ampm"),
                fontSize: 40,
                textAlign: "center",
                textColor: this.bindProp("TextColor"),
              },
            },
          },
        },
        Mode: {
          LogoBG: {
            w: 50,
            h: 50,
            mount: 0.5,
            x: 860,
            y: 50,
            color: this.bindProp("LogoBGColor"),
            rect: true,
            shader: { type: Lightning.shaders.RoundedRectangle, radius: 25 },
          },
          Logo: {
            x: 840,
            y: 30,
            w: 40,
            h: 40,
            src: this.bindProp("modeSrc"),
          },
        },
      },
    };
  }

  static getFonts() {
    return [
      {
        family: "Regular",
        url: Utils.asset("fonts/Roboto-Regular.ttf") as string,
      },
      {
        family: "Orbitron",
        url: Utils.asset("fonts/Orbitron-Regular.ttf") as string,
      },
    ];
  }

  override _init() {
    this.modeUpdate = false;

    this.shadowColor = 0xffe9e9e9;
    this.modeSrc = Utils.asset("images/night.png");
    this.backgroundColor = 0xfff0f8ff;
    this.ClockBGColor = 0xffffffff;
    this.ClockColor = 0xfff0f8ff;
    this.TextColor = 0xff000000;
    this.LogoBGColor = 0xff000000;
    const date = new Date();
    this.myhours = String(date.getHours());
    this.myminutes = String(date.getMinutes()).padStart(2, "0");
    this.myseconds = String(date.getSeconds()).padStart(2, "0");
    this.ampm = Number(this.myhours) >= 12 ? "PM" : "AM";
    Registry.setInterval(() => {
      const date = new Date();
      this.myhours = String(date.getHours());
      this.myminutes = String(date.getMinutes()).padStart(2, "0");
      this.myseconds = String(date.getSeconds()).padStart(2, "0");
      this.ampm = Number(this.myhours) >= 12 ? "PM" : "AM";
    }, 1000);
  }

  override _handleEnter() {
    if (this.modeUpdate) {
      this.modeSrc = Utils.asset("images/night.png");
      this.backgroundColor = 0xfff0f8ff;
      this.ClockBGColor = 0xffffffff;
      this.ClockColor = 0xfff0f8ff;
      this.TextColor = 0xff000000;
      this.LogoBGColor = 0xff000000;
      this.shadowColor = 0xffe9e9e9;
      this.modeUpdate = !this.modeUpdate;
    } else {
      this.backgroundColor = 0xff252b2e;
      this.ClockBGColor = 0xff323940;
      this.ClockColor = 0xff252b2e;
      this.TextColor = 0xffffffff;
      this.LogoBGColor = 0xffffffff;
      this.shadowColor = 0xff202629;
      this.modeSrc = Utils.asset("images/light.png");
      this.modeUpdate = !this.modeUpdate;
    }
  }
}
