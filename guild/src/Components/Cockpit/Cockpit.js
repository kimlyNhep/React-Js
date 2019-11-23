import React, { useEffect, useRef, useContext } from 'react';
import classStyle from './Cockpit.css';
import Authentication from '../../context/auth-context';

const Cockpit = props => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(Authentication);

  console.log('Cockpit.js', authContext.Authenticated);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // HTTP request
    // setTimeout(() => {
    //   alert('Save data to the cloud');
    // }, 1000);
    // if we want to useEffect only for the first time
    //just put the second argument as an empty asrray([])
    // or we can call useEffect depend on the second argument ([a,b,c])
    toggleBtnRef.current.click();
    return () => {
      console.log('[Cockpit.js] clean up work useEffect');
    };
    // this clean up only call when we remove the cockpit
    // when we use an empty array as second argument
  }, []);

  // useEffect combine componentDidMount and componentDidUpdate
  // we can use useEffect as many as we want

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] clean up work 2nd useEffect');
    };
    // this clean up always call whenever update life cycle
    // we use no argument with useEffect function
  });

  let classes = [];
  let btnClass = '';

  if (props.showPerson) btnClass = classStyle.Red;
  if (props.personsLength <= 2) {
    classes.push(classStyle.red);
  }
  if (props.personsLength <= 1) {
    classes.push(classStyle.bold);
  }
  return (
    <div className={classStyle.Cockpit}>
      <h1>{props.title}</h1>
      <p className={classes.join(' ')}>This is really working!</p>
      <button ref={toggleBtnRef} onClick={props.toggle} className={btnClass}>
        Toggle Persons
      </button>
      <Authentication.Consumer>
        {context => <button onClick={context.login}>Login</button>}
      </Authentication.Consumer>
    </div>
  );
};

export default React.memo(Cockpit);
