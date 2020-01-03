import React from 'react'
import MapGL, { Marker, Popup } from 'react-map-gl'

import 'mapbox-gl/dist/mapbox-gl.css'

import MapInfo from '../commonComponents/MapInfo'

const Token = 'pk.eyJ1IjoicGhvZWJleHh4YyIsImEiOiJjazMxenUxYmUwZGdhM2xzMmVwZG5iNnQ0In0.NS8058Cpk5wl3Qko8cJQiQ'


class Map extends React.Component { 
  constructor(props) {
    super(props)
    this.state = {
      viewport: {
        width: 570,
        height: 300,
        latitude: 51.5074,
        longitude: 0.1278,
        zoom: 13,
        bearing: 0,
        pitch: 0
      },
      info: null
    }
  }



  _updateViewport = viewport => {
    this.setState({ viewport })
  }


  _renderMarker = () => {
    const { data } = this.props
    return (
      <Marker longitude={data.lng} latitude={data.lat}>
        <img src='https://i.imgur.com/P1REhj4.png' 
          height="25" 
          width="25"
          onClick={() => this.setState({ info: this.props.data })}
          className='pointer grow dim'
        />
      </Marker> 
    )
  }


  _renderPopup() {
    const { info } = this.state

    return (
      info && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={info.lng}
          latitude={info.lat}
          closeOnClick={false}
          onClose={() => this.setState({ info: null })}
        >
          <MapInfo info={info}/>
        </Popup>
      )
    )
  }


  render() {
    if (!this.props.data.lng && !this.props.data.lat) return null

    return <div className='mb5 w-50-l'>
      <MapGL
        { ...this.state.viewport }
        latitude={this.props.data.lat} 
        longitude={this.props.data.lng} 
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={this._updateViewport}
        mapboxApiAccessToken={Token}
      >
        {this._renderMarker()}
        {this._renderPopup()}
      </MapGL> 
    </div>
  }
}

export default Map