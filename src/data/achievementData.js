import fr from '../assets/freelancing.jpg'
import pt from '../assets/packet-tracer.jpg'
import sql from '../assets/SQL.jpg'
import jq from '../assets/jQuery.jpg'

export const achievementData = {
    bio : "Certifications did myself and looking for sponsor to certifications on AWS web Services  ",
    achievements : [
        // {
        //     id : 1,
        //     title : 'Google Cloud certification',
        //     details : 'Google Cloud certifications validate your expertise and showcase your ability to transform businesses with Google Cloud technology.',
        //     date : 'Aug 20, 2019',
        //     field : 'Automation',
        //     image : 'https://images.unsplash.com/photo-1573141597928-403fcee0e056?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80'
        // },
        {
            id : 1,
            title : 'JQuery',
            details : 'Learning Javasript And JQuery From Scratch. Provided by Eduonix Learning Solutions',
            date : 'Aug 20, 2019',
            field : 'javaScript',
            image : jq
        },
        {
            id : 2,
            title : 'SQL and Relational Database',
            details : 'Provided by Big Data University.',
            date : 'Aug 20, 2019',
            field : 'Database',
            image : sql
        },
        {
            id : 3,
            title : 'Freelancing Course',
            details : 'Provided by DigiSkills.',
            date : 'Aug 20, 2019',
            field : 'Freelancing',
            image : fr
        },
        {
            id : 4,
            title : 'Introduction to Packet Tracer',
            // details : 'Learning networking concepts and protocols - Provided by Cisco Networking Academy',
            details : 'Provided by Cisco Networking Academy',
            date : 'Aug 20, 2019',
            field : 'Newtworking',
            image : pt
        }

    ]
}


// Do not remove any fields.
// Leave it blank instead as shown below.

/*

export const achievementData = {
    bio : "",
    achievements : []
}

*/