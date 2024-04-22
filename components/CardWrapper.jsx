import React from 'react'
import CardComponent from './CardComponent'
const CardWrapper = () => {
    return (
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <CardComponent
                title={"Total Revenue"}
                content={"$45,231.89"}
                contentDes={"+20.1% from last month"} />
            <CardComponent
                title={"Subscriptions"}
                content={"+2350"}
                contentDes={"+180.1% from last month"} />
            <CardComponent
                title={"Sales"}
                content={"+12,234"}
                contentDes={"+19% from last month"} />
            <CardComponent
                title={"Active Now"}
                content={"+573"}
                contentDes={"+201 since last hour"} />
        </div>
    )
}

export default CardWrapper