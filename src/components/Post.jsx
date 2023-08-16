const fruits = ['Apple', 'Orange'];

const Post = () => {
    const randomFruit = Math.random() > 0.5 ? fruits[0] : fruits[1];

    return (
        <div>
            <h1>Hello World!</h1>
            <p>My first React.js component!</p>
            <p>Fruit of the day: {randomFruit}</p>
        </div>
    );
};

export default Post;