import {News} from "../../interfaces/news.interface";

export const NEWS:News[] = [
    {
        image: '/app/mocks/cats-q-c-640-480-1.jpg',
        title: 'TITLE 1',
        body: 'The target name is always the name of a property, even when it appears to be the name of something else. We see src and may think it’s the name of an attribute. No. It’s the name of an image element property.'
    },
    {
        image: '/app/mocks/cats-q-c-640-480-2.jpg',
        title: 'TITLE 2',
        body: 'Technically, Angular is matching the name to a directive input, one of the property names listed in the directive’s inputs array or a property decorated with @Input(). Such inputs map to the directive’s own properties. Technically, Angular is matching the name to a directive input, one of the property names listed in the directive’s inputs array or a property decorated with @Input(). Such inputs map to the directive’s own properties.Technically, Angular is matching the name to a directive input, one of the property names listed in the directive’s inputs array or a property decorated with @Input(). Such inputs map to the directive’s own properties. Technically, Angular is matching the name to a directive input, one of the property names listed in the directive’s inputs array or a property decorated with @Input(). Such inputs map to the directive’s own properties.'
    },
    {
        image: '/app/mocks/cats-q-c-640-480-3.jpg',
        title: 'TITLE 3',
        body: 'As we\'ve already discussed, evaluation of a template expression should have no visible side effects. The expression language itself does its part to keep us safe. We can’t assign a value to anything in a property binding expression nor use the increment and decrement operators.'
    },
    {
        image: '/app/mocks/cats-q-c-640-480-4.jpg',
        title: 'TITLE 4',
        body: 'The expression could call something like getFoo(). Only we know what getFoo() does. If getFoo() changes something and we happen to be binding to that something, we risk an unpleasant experience. Angular may or may not display the changed value. Angular may detect the change and throw a warning error. Our general advice: stick to data properties and to methods that return values and do no more.'
    },
    {
        image: '/app/mocks/cats-q-c-640-480-5.jpg',
        title: 'TITLE 5',
        body: 'The template expression should evaluate to the type of value expected by the target property. Return a string if the target property expects a string. Return a number if the target property expects a number. Return an object if the target property expects an object.'
    },
    {
        image: '/app/mocks/cats-q-c-640-480-6.jpg',
        title: 'TITLE 6',
        body: 'We routinely initialize attributes this way in standard HTML, and it works just as well for directive and component property initialization. The following example initializes the prefix property of the HeroDetailComponent to a fixed string, not a template expression. Angular sets it and forgets about it.'
    }
];