import React, { Component } from 'react';
import './Images.css';
import Img from './Img';
import LargeImage from './LargeImg';



class Images extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imgLst: [
                {
                    imgSrc: '../img/img1.jpg',
                    title: 'lorem10',
                    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, debitis!"
                },
                {
                    imgSrc: 'https://images.pexels.com/photos/12235408/pexels-photo-12235408.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
                    title: 'lorem10',
                    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, debitis!"
                },
                {
                    imgSrc: 'https://images.pexels.com/photos/12338228/pexels-photo-12338228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    title: 'lorem10',
                    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, debitis!"
                },
                {
                    imgSrc: 'https://images.pexels.com/photos/12235408/pexels-photo-12235408.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
                    title: 'lorem10',
                    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, debitis!"
                },
                {
                    imgSrc: 'https://images.pexels.com/photos/12028961/pexels-photo-12028961.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
                    title: 'lorem10',
                    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, debitis!"
                },
                {
                    imgSrc: 'https://images.pexels.com/photos/12235408/pexels-photo-12235408.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
                    title: 'lorem10',
                    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, debitis!"
                },
                {
                    imgSrc: 'https://images.pexels.com/photos/12028961/pexels-photo-12028961.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
                    title: 'lorem10',
                    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, debitis!"
                },
                {
                    imgSrc: 'https://images.pexels.com/photos/12235408/pexels-photo-12235408.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
                    title: 'lorem10',
                    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, debitis!"
                },
                {
                    imgSrc: 'https://images.pexels.com/photos/12028961/pexels-photo-12028961.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
                    title: 'lorem10',
                    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, debitis!"
                },
                {
                    imgSrc: 'https://images.pexels.com/photos/12235408/pexels-photo-12235408.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
                    title: 'lorem10',
                    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, debitis!"
                },
            ],
            imgStyle: {
                lrgImgConStyle: {
                    display: 'none'
                },
                imgListConStyle: {
                    display: 'flex'
                }
            },
            lrgImg: {
                imgSrc: '',
                title: '',
                details: ''
            }
        }
    }

    handleClick = (e) => {
        console.log("this is working fine");
        e.preventDefault();



        if (this.state.imgStyle.imgListConStyle.display === 'flex') {
            console.log("Large Image title: " + this.state.lrgImg.title);

            this.setState({
                imgStyle: {
                    lrgImgConStyle: {
                        display: 'block'
                    },
                    imgListConStyle: {
                        display: 'none'
                    }
                },
            });

            Object.values(this.state.imgLst).forEach(element => {
                console.log(element.imgSrc);
                let sourceString = '..' + e.target.src.toString().slice(21);
                console.log(sourceString);



                if (element.imgSrc === sourceString) {
                    console.log("Source is matched");
                    console.log("Elelment title: " + element.title);


                    this.setState({
                        lrgImg: {
                            imgSrc: e.target.src,
                            title: element.title,
                            details: element.details
                        }
                    });
                } else {
                    console.log("Source didn't match");
                }
            });

        } else {
            console.log("Something went wrong");

        }
    }

    closeLargeImage = (e)=>{
        e.preventDefault();
        console.log("close button is working fine");
        this.setState({
            imgStyle: {
                lrgImgConStyle: {
                    display: 'none'
                },
                imgListConStyle: {
                    display: 'flex'
                }
            },
        });
    }

    buttonStyle = {
        background: 'none',
        border: 'none'
    }



    render() {
        let imageItemList = this.state.imgLst.map(image => {
            return (
                <button onClick={this.handleClick} style={this.buttonStyle} key={image.imgSrc} ><Img src={image.imgSrc}></Img></button>
            );
        })



        return (
            <React.Fragment >
                <div className="lg-img-con" style={this.state.imgStyle.lrgImgConStyle}>
                    <LargeImage closeButton={this.closeLargeImage} title={this.state.lrgImg.title} details={this.state.lrgImg.details} src={this.state.lrgImg.imgSrc}></LargeImage>
                    {/* <LargeImage title={this.state.lrgImg.title} details={this.state.lrgImg.details} src={this.state.lrgImg.imgSrc}  > <LargeImage/> */}
                </div>
                <div className="wrapper" style={this.state.imgStyle.imgListConStyle}>
                    {imageItemList}
                </div>
            </React.Fragment>
        );
    }
}


export default Images;