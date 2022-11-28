import { Accordion } from 'flowbite-react';
import React from 'react';

const Blog = () => {

    return (
        <div>
            <h1 className='text-4xl font-bold text-primary my-12 text-center'>BLOG</h1>
            <Accordion>
                <Accordion.Panel>
                    <Accordion.Title>
                        What are the different ways to manage a state in a React application?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            <strong>Lifted State</strong><br></br>
                            The Fourth option is to define the state in the parent component. Often, the same state is used across multiple components. In those cases, it is useful to lift the state to a common parent. The lifting state is a two‑step process. First, we declare the state in a common parent component, and then we pass the state down to child components via props. This pattern should be considered any time a few related components need to use the same state. The lifting state avoids duplicating states in multiple components. It helps to assure that our components all consistently reflect the same state.

                            In the below example, we have lifted the state and the handleChange event in the parent component, helping to maintain consistency.
                        </p>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            <strong>Derived State</strong><br></br>
                            The fifth option is to compute the new state based on the available state and we do not need to declare a state at all. If there are existing values that can be composed to give us the information we need, then we can calculate that information on each render instead of storing it. Some examples include calling .length on an array to determine the number of records instead of storing a separate numItems variable in the state or deriving an errorsExist boolean by checking if the errors array is empty.
                        </p>

                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        How does prototypical inheritance work?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            In programming, we often want to take something and extend it.

                            For instance, we have a user object with its properties and methods, and want to make admin and guest as slightly modified variants of it. We’d like to reuse what we have in user, not copy/reimplement its methods, just build a new object on top of it.

                            Prototypal inheritance is a language feature that helps in that.
                        </p>

                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        What is a unit test? Why should we write unit tests?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Unit Testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object.
                        </p>

                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        React vs. Angular vs. Vue?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            <strong>React</strong><br />
                            React, developed by Facebook, was initially released in 2013. Facebook uses React extensively in their products (Facebook, Instagram, and WhatsApp). Similar to Vue, the React developers also announce their newest version on the blog section of the React website.
                            <br /><strong>Angular</strong><br />
                            developed by Google, was first released in 2010, making it the oldest of the lot. It is a TypeScript-based JavaScript framework. A substantial shift occurred in 2016 on the release of Angular 2 (and the dropping of the “JS” from the original name – AngularJS). Angular 2+ is known as just Angular. Although AngularJS (version 1) still gets updates, we will focus the discussion on Angular.
                            <br /><strong>Vue</strong><br />
                            also known as Vue.js, is the youngest member of the group. It was developed by ex-Google employee Evan You in 2014. Over the last several years, Vue has seen a substantial shift in popularity, even though it doesn’t have the backing of a large company. The most current version is always announced on the official Vue website on their releases page. Contributors for Vue are supported by Patreon. It should be noted that Vue also has its own GitHub repo, and functions using TypeScript.

                            Further reading: Vue.js Tutorial for Beginner Developers
                        </p>

                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>
        </div>
    );
};

export default Blog;