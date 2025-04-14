import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { Button } from './ui/button'
import { ArrowLeft } from 'lucide-react'

const category = [
    "Frontend Developer",
    "Backend Developer",
    "Data Scientist",
    "Graphic Designer",
    "Fullstack Developer"
]

function CategoryCarousel() {
    return (
        <div>
            <Carousel className="w-full max-w-xl mx-auto my-20">
                <CarouselContent>
                    {category.map((cat, index) => (
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <Button variant="outline" className="rounded-full w-38">{cat}</Button>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="border-none cursor-pointer"/>
                <CarouselNext className="border-none cursor-pointer"/>
            </Carousel>
        </div>
    )
}

export default CategoryCarousel
