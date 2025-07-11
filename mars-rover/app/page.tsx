import Starfield from './starfield';

export default function Home() {
    return (
        <>
            <div>
                <Starfield
                    starCount={2500}
                    starCount={2500}
                    startColor="white"
                    speedFactor={0.1}
                    star
                    backgroundColor="black"
                    />
                <div className="container mx-auto px-4">
                    <h1>Hello word</h1>
                    <p>This is a content to make our page longer</p>
                    <div className="w-full h-screen bg-green-300"></div>
                    <p>
                        Lorem Ipsum is simply dummy text ...
                    </p>
                </div>
            </div>
        </>
    );
}