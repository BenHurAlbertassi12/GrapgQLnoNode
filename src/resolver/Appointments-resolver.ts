import { Resolver } from "type-graphql";
import { Query } from "type-graphql/dist/decorators";

@Resolver()
export class AppointmentsResolver{
    @Query(() => String)
    async first() {
    return 'primeira'
}
}