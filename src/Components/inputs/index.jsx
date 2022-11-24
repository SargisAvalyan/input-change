import React from "react";
import "./style.scss"

class InputsContainer extends React.Component {

    state = {

        bgColor: '',
        titletext: '',
        descriptiontext: '',
        fontSizeTitle: "20",
        fontSizeDescription: "10",
        titlecolor: '',
        descriptioncolor: '',
        borderradius: ""
    }



    handleChangeInputtitle = (e) => {
        this.setState({ titletext: e.target.value })
    }

    handleChangeInputdescription = (e) => {
        this.setState({ descriptiontext: e.target.value })
    }

    handleChangeRangeTitle = (e) => {
        this.setState({ fontSizeTitle: e.target.value })
    }

    handleChangeRangeDescription = (e) => {
        this.setState({ fontSizeDescription: e.target.value })
    }
   
    handleChangeTitleColor = (e) => {
        this.setState({ titlecolor: e.target.value })
    }

    handleChangeDescriptionColor = (e) => {
        this.setState({ descriptioncolor: e.target.value })
    }

    handleChangeColor = (e) => {
        this.setState({ bgColor: e.target.value })
    }

    handleChangeRadius= (e)=>{
        this.setState({borderradius:e.target.value})
    }

    render() {
        return <div className="container" >
            <div className="inputlist" style={{backgroundColor:this.state.bgColor, borderRadius: this.state.borderradius + 'px'}}>
                <p>
                    Title
                </p>
                <label>
                    <input type="text" value={this.state.titletext} onChange={this.handleChangeInputtitle} />
                </label>
                <p>
                    Font Size
                </p>
                <label >
                    <input type="range" value={this.state.fontSizeTitle} max={56} min={20} onChange={this.handleChangeRangeTitle} />
                </label>
                <p>Color</p>
                <label >
                    <input type="color" onChange={this.handleChangeTitleColor} />
                </label>

                <p>
                    Description
                </p>
                <label>
                    <input type="text" value={this.state.descriptiontext} onChange={this.handleChangeInputdescription} />
                </label>
                <p>
                    Font Size
                </p>
                <label >
                    <input type="range" value={this.state.fontSizeDescription} max={28} min={10} onChange={this.handleChangeRangeDescription} />
                </label>
                <p>Color</p>
                <label >
                    <input type="color" onChange={this.handleChangeDescriptionColor} />
                </label>
                <p>BackgroundColor</p>
                <label >
                    <input type="color" onChange={this.handleChangeColor} />
                </label>
                <p>Border-Radius</p>
                <label>
                    <input type="range" value = {this.state.borderradius} max={100} min={0} onChange={this.handleChangeRadius}/>
                </label>                          

            </div>
            <div className="stylelist" style={{backgroundColor:this.state.bgColor, borderRadius: this.state.borderradius + 'px' }}>
                <div>
                    <p style={{ fontSize: this.state.fontSizeTitle + 'px', color: this.state.titlecolor } }>{this.state.titletext}</p>
                </div>
                <div>
                    <p style={{ fontSize: this.state.fontSizeDescription + 'px',  color: this.state.descriptioncolor  }}>{this.state.descriptiontext}</p>
                </div>
            </div>
        </div>
    }
}

export default InputsContainer

