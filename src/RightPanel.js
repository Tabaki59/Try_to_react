import React from 'react'

const MainInformation = {
    backgroundColor: "#0a184c",
    width: "70%",
    height: "100%"

}

const TittlesStyle = {
    marginLeft: "5%",
    marginTop: "3%",
    color: "white"
}

export default function RightPanel() {
    return(
        <div className="RightPanel" style={MainInformation}>
            <h1 style={TittlesStyle} >Что умею</h1>  {/*TODO Все утолкать в Json'ы и сделать переключатель языка*/}
            <h1 style={TittlesStyle} >Что успел поделать</h1>  {/*TODO Все утолкать в Json'ы и сделать переключатель языка*/}
        </div>
    )
}