export class DefaultChecklist {
  public id: Number;
  public name: String;
  public list: [] = [];

  constructor (id: Number, name: String, list: []) {
    this.id = id;
    this.name = name;
    this.list = list;
  }
  static createEmpty(id: Number, name: String, list: []) {
    return new DefaultChecklist(0,'',['Проверить что-то','Купить что-то','Не забыть что-то'])
  }
}
