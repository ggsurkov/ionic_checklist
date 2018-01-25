import {DefaultChecklist} from "./default-checklist";

export class DefaultTemplate {
  public id: Number;
  public name: String;
  public checklistArray: DefaultChecklist[];


  constructor (id: Number, name: String, checklistArray: DefaultChecklist[]) {
    this.id = id;
    this.name = name;
    this.checklistArray = checklistArray;
  }
  static createEmpty(id: Number, name: String, checklistArray: DefaultChecklist[]){
    return new DefaultTemplate(0,'Default Name', new DefaultChecklist(0,'Default Checklist', []))
  }
}
