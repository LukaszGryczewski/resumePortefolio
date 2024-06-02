export class Tag {

  static readonly ANGULAR = new Tag('Angular', 'red');
  static readonly PHP = new Tag('Php','dodgerblue');
  static readonly JAVA = new Tag('Java','firebrick');
  static readonly JAVASCRIPT = new Tag('JavaScript','gold');
  static readonly CSS = new Tag('Css','blue');
  static readonly HTML = new Tag('Html','orange');
  static readonly LARAVEL = new Tag('Laravel','orangered');
  static readonly SPRING = new Tag('Spring','chertreuse');
  static readonly TYPESCRIPT = new Tag('TypeScript','deepskyblue');
  static readonly JQUERY = new Tag('Jquery','darkblue');
  static readonly AJAX = new Tag('Ajax','lightskyblue');
  static readonly BOOTSTRAP = new Tag('Bootstrap','purple');

  constructor(private readonly key : string, public readonly color : string ){}


  getKey(): string {
    return this.key;
  }

  toString() {
    return this.key;
  }
}
