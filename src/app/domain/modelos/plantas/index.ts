export class Planta {
  constructor(
    public id: number,
    public nombre_comun: string,
    public nombre_cientifico: string,
    public tipo: string,
    public altura_maxima: number,
    public clima: string,
    public sustrato_siembra: string
  ) {}

  static fromApi(data: any): Planta {
    return new Planta(
      data.id,
      data.nombre_comun,
      data.nombre_cientifico,
      data.tipo,
      data.altura_maxima,
      data.clima,
      data.sustrato_siembra
    );
  }

  toJSON(): any {
    return {
      id: this.id,
      nombre_comun: this.nombre_comun,
      nombre_cientifico: this.nombre_cientifico,
      tipo: this.tipo,
      altura_maxima: this.altura_maxima,
      clima: this.clima,
      sustrato_siembra: this.sustrato_siembra
    };
  }

  toMap(): Map<string, any> {
    return new Map<string, any>([
      ['id', this.id],
      ['nombre_comun', this.nombre_comun],
      ['nombre_cientifico', this.nombre_cientifico],
      ['tipo', this.tipo],
      ['altura_maxima', this.altura_maxima],
      ['clima', this.clima],
      ['sustrato_siembra', this.sustrato_siembra]
    ]);
  }
}
