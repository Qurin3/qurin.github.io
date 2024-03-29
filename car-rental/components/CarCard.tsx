"use client";

import React from 'react'
import { useState } from 'react'
import { CarProps } from '@/types';
import { CustomButton } from '.';
import { calculateCarRent, generateCarImageUrl } from '@/utils';
import Image from 'next/image';
import {CarDetails} from '.';
interface CartCardProps{
    car: CarProps;

}

const CarCard = ({car}: CartCardProps) => {
    const {city_mpg, year, make, model, transmission, drive } = car;
    const carRent = calculateCarRent(city_mpg, year)
    const [isOpen, setisOpen] = useState(false)
  return (
    <div className='car-card group'>
        <div className='car-card__content'>
            <h2 className='car-card__content-title'>
                {make} {model}
            </h2>
        </div>
        <p className='flex mt-6 text-[32px]'>
            
            <span className='self-start text-[14px] font-semibold'>
                zł
            </span>
                {carRent}
            <span className='self-end text-[14px] font-medium'>
                /dziennie
            </span>
        </p>
        <div className='relative w-full h-40 my-3 object-contain'>
            <Image src={generateCarImageUrl(car)} alt = "car model"
             fill priority className='object-contain'/>
        </div>
        <div className='relative flex w-full mt-2'>
            <div className='flex group-hover:invisible w-full justify-between text-gray'>
                
                <div className='flex flex-col justify-center items-center gap-2'>
                    <Image src="/steering-wheel.svg" width={20} height={20} alt='steering wheel'/>
                    <p className='text-[14px]'>
                        {transmission === "a" ? "Atutomat" : "Manual"}
                    </p>
                </div>
                
                <div className='flex flex-col justify-center items-center gap-2'>
                    <Image src="/tire.svg" width={20} height={20} alt='steering wheel'/>
                    <p className='text-[14px]'>
                        {drive.toUpperCase()}
                    </p>
                </div>

                <div className='flex flex-col justify-center items-center gap-2'>
                    <Image src="/gas.svg" width={20} height={20} alt='steering wheel'/>
                    <p className='text-[14px]'>
                        {city_mpg} L
                    </p>
                </div>
            </div>
            <div className='car-card__btn-container'>
                <CustomButton 
                title='zobacz wiecej'
                containerStyles='w-full py-[16px] bg-primary-blue'
                textStyles="text-white text-[14px] leading-[17px] font-bold"
                rightIcon = "/right-arrow.svg"
                handleClick={() => setisOpen(true)}
                />
            </div>
        </div>

        <CarDetails isOpen={isOpen} closeModal={()=> setisOpen(false)} car={car} />
    </div>
  )
}

export default CarCard
