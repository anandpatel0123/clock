import { Lightning, Utils } from "@lightningjs/sdk";

interface AppTemplateSpec extends Lightning.Component.TemplateSpec {
  Background: Object;
  ClockBG: {
    Mode:{
      LogoBG: object;
      Logo: Object;
    };
    
  };
  Shadow: Object;
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
        color: 0xfff0f8ff,
        rect: true,
      },
      Shadow: {
        mount: 0.5,
        x: 955,
        y: 560,
        color: 0xffe9e9e9,
        texture: Lightning.Tools.getShadowRect(950, 320, 20, 10, 20),
      },
      ClockBG: {
        w: 920,
        h: 300,
        mount: 0.5,
        x: 960,
        y: 550,
        color: 0xffffffff,
        rect: true,
        shader: { type: Lightning.shaders.RoundedRectangle, radius: 20 }, 
        Mode:{
          LogoBG:{
          w: 50,
          h: 50,
          mount: 0.5,
          x: 860,
          y: 50,
          color: 0xff000000,
          rect: true,
          shader: { type: Lightning.shaders.RoundedRectangle, radius: 25 },
          },
          Logo:{
          x: 840,
          y: 28,
          w:40,h:40,
          src: Utils.asset("images/night.png")
          }
        }       
      },
    };
  }

  static getFonts() {
    return [
      {
        family: "Regular",
        url: Utils.asset("fonts/Roboto-Regular.ttf") as string,
      },
    ];
  }

  override _init() {}
}
