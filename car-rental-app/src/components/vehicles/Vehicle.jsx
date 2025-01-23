import React, { useEffect, useState } from 'react'
import { getVehicles } from './VehicleService'
import VehicleItem from './VehicleItem'

function Vehicle() {
    let [vehicles,setVehicles]=useState([])

    useEffect(()=>{
        getVehicles().then(data=>{
            console.log(data)
            setVehicles(data)
        })
    },[])



  return (
    <div>

      
        {
            vehicles.map((v)=>{
                return (
                    <VehicleItem
                        models={v.models}
                        type={v.type}
                        price={v.price}
                        licensePlate={v.licensePlate}
                        status={v.status}

                    />
                )
            })
        }         
    </div>
  )
}

export default Vehicle