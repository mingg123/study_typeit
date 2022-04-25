import TypeIt from 'typeit-react';
// import './styles.css';

export default function App() {
  const SuperStrong = ({ children }) => {
    return <strong style={{ fontSize: '80px' }}>{children}</strong>;
  };
  return (
    <div className="App">
      {/* <TypeIt
        getBeforeInit={instance => {
          instance
            .type("Hi, I'm")
            .pause(750)
            .type('Min Ji')
            .pause(500)
            .type('!');
          return instance;
        }}
      /> */}

      {/* <TypeIt
        options={{
          strings: ['This will be typed!'],
          speed: 10,
          waitUntilVisible: true,
        }}
      /> */}
      <TypeIt>
        Weak text. <SuperStrong>Super strong text.</SuperStrong>
      </TypeIt>
      <TypeIt>This will be typed in a `span` element!</TypeIt>
      <TypeIt options={{ breakLines: false }} element="h1">
        Developer
        <br />
        Engineer
        <br />
        Writer
      </TypeIt>
      <TypeIt options={{ breakLines: false }} element="h1">
        {`Developer 
        Engineer 
        Writer`}
      </TypeIt>
    </div>
  );
}
