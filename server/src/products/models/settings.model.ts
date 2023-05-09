import { Column, DataType, Model, Table } from "sequelize-typescript";

const { INTEGER, STRING } = DataType

interface SettingsCreationAttrs {
   promocode: string
   email: string
}

@Table({ tableName: 'settings' })
export class Settings extends Model<Settings, SettingsCreationAttrs> {
   @Column({
      type: INTEGER,
      unique: true, autoIncrement: true, primaryKey: true
   }) id: number

   @Column({
      type: STRING, allowNull: false, defaultValue: 'ABCD-EFGH-IGKL-LMNO'
   }) promocode: string

   @Column({
      type: STRING, allowNull: false, defaultValue: 'ru-tec@yandex.ru'
   }) email: string
}