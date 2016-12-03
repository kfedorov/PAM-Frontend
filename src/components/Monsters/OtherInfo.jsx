import React from 'react'


const Info = ({monster}) => {
    return (
        <div>
            <h2>OtherInfo</h2>

        </div>
    );

}

Info.propType = {
    monster: React.PropTypes.shape({
    }).isRequired
};

export default Info;
