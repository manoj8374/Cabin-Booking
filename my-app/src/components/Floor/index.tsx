import {useState, useEffect } from 'react'
import {FloorContainer, SpinnerContainer} from './cabinStyled'
import FloorItem from '../FloorItem'
import {url} from '../../Utils'
import Cookies from 'js-cookie'
import ClipLoader from "react-spinners/ClipLoader";
import {useCabinData} from '../../Utils'
import { useDispatch } from 'react-redux'
import { AppDispatch, RootState } from '../../Redux/store'
import { useSelector } from 'react-redux'
import {getCabinDetails} from '../../Redux/getcabindetailsslice'

const Cabin = ()=>{
    const dispatch = useDispatch<AppDispatch>()

    const {details, isLoading, error} = useSelector((state: RootState) => state.cabindetails)

    useEffect(()=>{
        const fetchCabinDetails = async ()=>{
          try{
            await dispatch(getCabinDetails())
          }catch(e){
            console.log(e)
          }
        }

        fetchCabinDetails()
    },[])

    const renderInfo = ()=>{
      if(isLoading){
        return (
          <SpinnerContainer data-testid = "spinner container">
            <ClipLoader color={"#1F41BB"} loading={true} size={50} />
          </SpinnerContainer>
        )
      }

      if(error){
        return(
          <h1>Error</h1>
        )
      }

      
      return (<FloorContainer data-test-id = "home-container">
      {details.map((floor)=>{
            return (
                <FloorItem key = {floor.floor_name} floor = {floor.floor_name} cabins = {floor.cabins}/>
            )
        })}
    </FloorContainer>)

    }

    return (
        renderInfo()
    )
}

export default Cabin