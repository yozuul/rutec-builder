import { Column, DataType, Model, Table } from "sequelize-typescript";

const { INTEGER, STRING } = DataType

interface UsersCreationAttrs {
   name: string
   email: string
   password: string
   role: string
   promocode: string
}

@Table({ tableName: 'users' })
export class Users extends Model<Users, UsersCreationAttrs> {
   @Column({
      type: INTEGER,
      unique: true, autoIncrement: true, primaryKey: true
   }) id: number

   @Column({
      type: STRING, allowNull: true
   }) name: string

   @Column({
      type: STRING, allowNull: false
   }) email: string

   @Column({
      type: STRING, allowNull: false, defaultValue: '123456'
   }) password: string

   @Column({
      type: STRING, allowNull: false, defaultValue: 'user'
   }) role: string

   @Column({
      type: STRING, allowNull: true
   }) promocode: string
}