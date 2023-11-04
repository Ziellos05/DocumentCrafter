import { Args, Int, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloWorldResolver {

    @Query( () => String, {name:'Holiwis', description:'Returna un holiwis'})
    helloWorld(): string {
        return 'Hola Mundo';
    }

    @Query( () => Int, {name:'randomNumber'})
    getRandomNumber( @Args('to', { nullable: true, type: () => Int } ) to: number = 10 ): number {
        return Math.floor( Math.random()*to )
    }

}
