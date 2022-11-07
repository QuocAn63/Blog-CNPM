exports.getUserInformation = (username) => {

    return [
        {
            $match: {
                username
            }
        },
        {
            $project:{
                __v: 0,
                password: 0,
                
            },
        },
        {
            $lookup: {
                from: "userdetails",
                localField: "_id",
                foreignField: "userId",
                as: "userdetail_data",
                
                pipeline: [
                    {
                        $project:{
                            __v: 0,
                        },
                    }
                ],
            }
        },

        {
            $lookup: {
                from: "usermetas",
                localField: "_id",
                foreignField: "userId",
                as: "usermeta_data",
                
                pipeline: [
                    {
                        $project:{
                            __v: 0,
                            
                        },
                    }
                ],
            }
        },
    ]
}