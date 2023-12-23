/* 
    Javascript is a scripting language that is used to create and control dynamic website content.
    Sounds like a bunch of rubbish lol, but what this means is that Javascript is used to make your webpage more interactive.
    It provides an extension to HTML and CSS, so that you have more fine-tuned and powerful control over your webpage.
    This can be abstract at first, but once we get into the nitty gritty of what you can do with Javascript (JS from now on), it will make more sense.

    Javascript is a massive language, and we cannot cover all the possible use cases here. And honestly the best way to learn is by doing
    howeever there is one thing I feel like is important to at least touch. The DOM or Document Object Model.
    
            The DOM, or Document Object Model, is a programming interface for HTML and XML documents. It represents the structure of a web page as a tree-like structure, where each element in the HTML document is represented as a node in the tree.
            Using JavaScript and the DOM, you can access and modify the elements in this HTML document. For example, you can change the text of the <h1> element to "Welcome!" like this:
            In this example, document refers to the root of the DOM tree, representing the entire HTML document. The querySelector method is used to select the <h1> element, and the textContent property is used to change its text.
            You can also add new elements, remove elements, modify styles, handle events, and perform many other operations using the DOM.
            Understanding the DOM is crucial for web development because it allows you to create dynamic and interactive web pages. By manipulating the DOM, you can respond to user actions, update content dynamically, and create engaging user experiences.The DOM, or Document Object Model, is a programming interface for HTML and XML documents. It represents the structure of a web page as a tree-like structure, where each element in the HTML document is represented as a node in the tree.
            The DOM allows JavaScript to interact with the HTML elements on a web page. It provides methods and properties that allow you to manipulate, traverse, and modify the content, structure, and style of the web page dynamically.
            Here's a simple example to illustrate how the DOM works:

            Let's say you have an HTML document with the following structure:

                    <!DOCTYPE html>
                    <html>
                    <head>
                        <title>My Web Page</title>
                    </head>
                    <body>
                        <h1>Hello, World!</h1>
                        <p>This is a paragraph.</p>
                        <button>Click me</button>
                    </body>
                    </html>

            Using JavaScript and the DOM, you can access and modify the elements in this HTML document. For example, you can change the text of the <h1> element to "Welcome!" like this:

                    const heading = document.querySelector('h1');
                    heading.textContent = 'Welcome!';

            In this example, document refers to the root of the DOM tree, representing the entire HTML document. The querySelector method is used to select the <h1> element, and the textContent property is used to change its text.
            You can also add new elements, remove elements, modify styles, handle events, and perform many other operations using the DOM.
            Understanding the DOM is crucial for web development because it allows you to create dynamic and interactive web pages. By manipulating the DOM, you can respond to user actions, update content dynamically, and create engaging user experiences.

*/
