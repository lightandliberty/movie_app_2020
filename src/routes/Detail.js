import React from 'react';

class Detail extends React.Component
{
    componentDidMount()
    {
        const {     // Detail 컴포넌트가 마운트되면
            location, history  
        } = this.props;         // 구조 분해 할당으로 location, history를 얻고,
        if(location.state == undefined) {   // location.state가 업는 경우,
            history.push('/');  // Home으로 이동 시킴.
        }
    }

    render(){
        const {location} = this.props;
        if(location.state){
            return <span>{location.state.title}</span>;
        }
        else{
            return null;
        }
    }
}

export default Detail;