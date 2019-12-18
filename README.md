
## TimeCountDown

### Example Code:

```

import TimeCountDown from './Components/TimeCountDown';

<div style={{
    marginTop: '24px'
}}>

    TimeCountDown: <TimeCountDown
        second={600}
        format="MM:SS"
        className="font-color-primary-medium m-left-xs m-right-xs"
        handleTimeExpired={() => {

        console.log('TimeExpired!!');

        }}
    />

</div>


```

### Result:
![image](https://github.com/TerryLee7788/react-time-count-down/blob/master/public/TimeCountDown.gif)
