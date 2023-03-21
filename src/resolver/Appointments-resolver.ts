import { Resolver } from "type-graphql";
import { Arg, FieldResolver, Mutation, Query, Root } from "type-graphql/dist/decorators";
import { CreateAppoimentInput } from "../dtos/inputs/create-appoiment-input";
import { Appointment } from "../dtos/models/appointment-model";
import { Customer } from "../dtos/models/custommer-model";

@Resolver(() => Appointment)
export class AppointmentsResolver {
  @Query(() => [Appointment])
  async Appointment() {
      return [
        {
          startAt: new Date(),
          endsAt: new Date()
        },
      ];
  }

  @Mutation(() => Appointment)
  async creatAppointments(@Arg('data') data: CreateAppoimentInput) {
    const appointment = {
      startAt: data.startAt,
      endsAt: data.endsAt,
    };
    return appointment;
    }

    @FieldResolver(() => Customer)
    async customer(@Root() appointment: Appointment) {
        return {
            name: 'Ben Hur'
        }
        
    }
}