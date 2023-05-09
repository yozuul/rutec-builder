export class AddUserDto {
   readonly name?: string | null
   readonly email: string
   readonly password: string
   readonly role: string
   readonly promocode?: string | null
}