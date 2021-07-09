# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?
    Functional components are also called stateless components because they strictly accept data and display it. Whereas stateful components implement logic and use state.

2. When does a componentWillMount function be called? What about a componentWillUpdate?
    componentWillMount is called only once in the initial mounting phase. componentWillUpdate is called right before rendering and whenever new props are passed to the component.

3. Define stateful logic.
    Stateful logic is code that uses state and is built within a component. Examples of this are functions that handle user events such as clicks or submitting a form of user input data.

4. What are the three step of creating a successful test? What is done in each phase?
    The three steps of creating a successful test are Arrange, Act, Assert. In Arrange, the target of the test is set up and any specifics are clarified such as required objects or settings. In Act, you are implementing the testing on the target behavior such as simulating user interactions like submitting a form or a click event. In Assert, you declare your expected outcomes of the outlined tests set up in Arrange & Act, such as true/false outcomes or simple text/numeric outputs.