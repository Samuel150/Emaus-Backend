//COLLECTION
db.createCollection("student",{
    validator:{
        $jsonSchema:{
            bsonType:"object",
            required:["names","lastNames","address","telephone","cityId","countryId"],
            properties:{
                names:{
                    bsonType:"string",
                    description:"user names is of type string and it's required"
                },
                lastNames:{
                    bsonType:"string",
                    description:"user lastNames is of type string and it's required"
                },
                telephone:{
                    bsonType:"int",
                    description:"user telephone is of type int and it's required"
                },
                address:{
                    bsonType:"string",
                    description:"user address is of type string and it's required"
                },
                cityId:{
                    bsonType:"objectId",
                    description:"user city is of type objectId and it's required"
                },
                countryId:{
                    bsonType:"objectId",
                    description:"user country is of type objectId and it's required"
                },
                church:{
                    bsonType:"string",
                    description:"user church is of type string"
                },
                email:{
                    bsonType:"string",
                    description:"user email is of type string"
                },
            }
        }
    }
})
db.createCollection("cycle",{
    validator:{
        $jsonSchema:{
            bsonType:"object",
            required:["name","order","registerDate"],
            properties:{
                name:{
                    bsonType:"string",
                    description:"cycle name is of type string and it's required"
                },
                order:{
                    bsonType:"int",
                    description:"cycle order is of type int and it's required"
                },
                registerDate:{
                    bsonType:"date",
                    description:"cycle registerDate is of type date and it's required"
                }
            }
        }
    }
})
db.createCollection("course",{
    validator:{
        $jsonSchema:{
            bsonType:"object",
            required:["cycleId","name","order","registerDate"],
            properties:{
                cycleId:{
                    bsonType:"objectId",
                    description:"course cycleId is of type objectId and it's required"
                },
                name:{
                    bsonType:"string",
                    description:"course name is of type string and it's required"
                },
                order:{
                    bsonType:"int",
                    description:"course order is of type int and it's required"
                },
                registerDate:{
                    bsonType:"date",
                    description:"course registerDate is of type date and it's required"
                },
                author:{
                    bsonType:"string",
                    description:"course author is of type string"
                }
            }
        }
    }
})
db.createCollection("course_record",{
    validator:{
        $jsonSchema:{
            bsonType:"object",
            required:["studentId","courseId","deliveryDate"],
            properties:{
                studentId:{
                    bsonType:"objectId",
                    description:"course record studentId is of type objectId and it's required"
                },
                courseId:{
                    bsonType:"objectId",
                    description:"course record courseId is of type objectId and it's required"
                },
                deliveryDate:{
                    bsonType:"date",
                    description:"course record deliveryDate is of type date and it's required"
                },
                correctionDate:{
                    bsonType:"date",
                    description:"course record correctionDate is of type date"
                },
                receivedDate:{
                    bsonType:"date",
                    description:"course record receivedDate is of type date"
                },
                grade:{
                    bsonType:"int",
                    description:"course record grade is of type int"
                }
            }
        }
    }
})
db.createCollection("country",{
    validator:{
        $jsonSchema:{
            bsonType:"object",
            required:["name"],
            properties:{
                name:{
                    bsonType:"string",
                    description:"country name is of type string and it's required"
                },
            }
        }
    }
})
db.createCollection("department",{
    validator:{
        $jsonSchema:{
            bsonType:"object",
            required:["countryId","name"],
            properties:{
                countryId:{
                    bsonType:"objectId",
                    description:"department countryId is of type objectId and it's required"
                },
                name:{
                    bsonType:"string",
                    description:"department name is of type string and it's required"
                },
            }
        }
    }
})
db.createCollection("city",{
    validator:{
        $jsonSchema:{
            bsonType:"object",
            required:["departmentId","name"],
            properties:{
                departmentId:{
                    bsonType:"objectId",
                    description:"city departmentId is of type objectId and it's required"
                },
                name:{
                    bsonType:"string",
                    description:"city name is of type string and it's required"
                },
            }
        }
    }
})
//// INSERTS
db.country.insert({
    name:"Bolivia",
})
//ObjectId("61a553c33b8bbd2ede7ba06f") BoliviaId
db.department.insert({
    name:"La Paz",
    countryId:ObjectId("61a553c33b8bbd2ede7ba06f")
})
//61a5548a3b8bbd2ede7ba070
db.city.find({departmentId:ObjectId("61a5548a3b8bbd2ede7ba070")}).pretty()
db.city.insert({
    name:"La Paz",
    departmentId:ObjectId("61a5548a3b8bbd2ede7ba070")
})
db.city.insert({
    name:"El Alto",
    departmentId:ObjectId("61a5548a3b8bbd2ede7ba070")
})
db.city.insert({
    name:"Viacha",
    departmentId:ObjectId("61a5548a3b8bbd2ede7ba070")
})
db.department.insert({
    name:"Cochabamba",
    countryId:ObjectId("61a553c33b8bbd2ede7ba06f")
})
//61a5548b3b8bbd2ede7ba071
db.city.find({departmentId:ObjectId("61a5548b3b8bbd2ede7ba071")}).pretty()
db.city.insert({
    name:"Cochabamba",
    departmentId:ObjectId("61a5548b3b8bbd2ede7ba071")
})
db.city.insert({
    name:"Quillacollo",
    departmentId:ObjectId("61a5548b3b8bbd2ede7ba071")
})
db.department.insert({
    name:"Santa Cruz",
    countryId:ObjectId("61a553c33b8bbd2ede7ba06f")
})
//61a5548b3b8bbd2ede7ba072
db.city.find({departmentId:ObjectId("61a5548b3b8bbd2ede7ba072")}).pretty()
db.city.insert({
    name:"Santa Cruz",
    departmentId:ObjectId("61a5548b3b8bbd2ede7ba072")
})
db.city.insert({
    name:"Camiri",
    departmentId:ObjectId("61a5548b3b8bbd2ede7ba072")
})
db.city.insert({
    name:"Montero",
    departmentId:ObjectId("61a5548b3b8bbd2ede7ba072")
})
db.department.insert({
    name:"Oruro",
    countryId:ObjectId("61a553c33b8bbd2ede7ba06f")
})
db.department.insert({
    name:"Potosi",
    countryId:ObjectId("61a553c33b8bbd2ede7ba06f")
})
db.department.insert({
    name:"Tarija",
    countryId:ObjectId("61a553c33b8bbd2ede7ba06f")
})
db.department.insert({
    name:"Sucre",
    countryId:ObjectId("61a553c33b8bbd2ede7ba06f")
})
db.department.insert({
    name:"Pando",
    countryId:ObjectId("61a553c33b8bbd2ede7ba06f")
})
db.department.insert({
    name:"Beni",
    countryId:ObjectId("61a553c33b8bbd2ede7ba06f")
})
//all Bolivia cities
db.department.find({countryId:ObjectId("61a553c33b8bbd2ede7ba06f")})


db.cycle.insert({
    name:"Primer ciclo",
    order:NumberInt(1),
    registerDate:new Date()
})
//ObjectId("61a555083b8bbd2ede7ba079") primer ciclo
db.cycle.insert({
    name:"Segundo ciclo",
    order:NumberInt(2),
    registerDate:new Date()
})
//ObjectId("61a555093b8bbd2ede7ba07a") segundo ciclo
//cursos ciclo 1
db.course.insert({
    cycleId:ObjectId("61a555083b8bbd2ede7ba079"),
    name:"El Siervo de Dios",
    order:NumberInt(1),
    registerDate:new Date(),
    author:"R. E. Harlow",
})

db.course.insert({
    cycleId:ObjectId("61a555083b8bbd2ede7ba079"),
    name:"El Hombre más grande",
    order:NumberInt(2),
    registerDate:new Date(),
    author:"Escuela por correspondencia Emmaus",
})

db.course.insert({
    cycleId:ObjectId("61a555083b8bbd2ede7ba079"),
    name:"El Verbo de Dios",
    order:NumberInt(3),
    registerDate:new Date(),
    author:"R. E. Harlow",
})
db.course.insert({
    cycleId:ObjectId("61a555083b8bbd2ede7ba079"),
    name:"La Biblia dice así",
    order:NumberInt(4),
    registerDate:new Date(),
    author:"William MacDonald y Kevin Dyer",
})
db.course.insert({
    cycleId:ObjectId("61a555083b8bbd2ede7ba079"),
    name:"El Rey venidero",
    order:NumberInt(5),
    registerDate:new Date(),
    author:"C. Ernest Tatham",
})
db.course.insert({
    cycleId:ObjectId("61a555083b8bbd2ede7ba079"),
    name:"Un Dios, un Camino",
    order:NumberInt(6),
    registerDate:new Date(),
    author:"Kevin G. Dyer",
})
//cursos ciclo 2
db.course.insert({
    cycleId:ObjectId("61a555093b8bbd2ede7ba07a"),
    name:"Nacido para triunfar",
    order:NumberInt(1),
    registerDate:new Date(),
    author:"William MacDonald",
})
db.course.insert({
    cycleId:ObjectId("61a555093b8bbd2ede7ba07a"),
    name:"¿Debo ser bautizado?",
    order:NumberInt(2),
    registerDate:new Date(),
    author:"Carlos Villamil y Felipe Nunn",
})
db.course.insert({
    cycleId:ObjectId("61a555093b8bbd2ede7ba07a"),
    name:"Lecciones para la vida cristiana",
    order:NumberInt(3),
    registerDate:new Date(),
    author:"William MacDonald",
})
//cursos del primer ciclo
db.course.find({cycleId:ObjectId("61a555083b8bbd2ede7ba079")}).pretty()
//cursos del segundo ciclo
db.course.find({cycleId:ObjectId("61a555093b8bbd2ede7ba07a")}).pretty()

//student
db.student.insert({
    names:"Pablo Samuel",
    lastNames:"Huanca Condorino",
    address:"Obrajes c/21",
    telephone:NumberInt(27866774),
    cityId:ObjectId("61a5548a3b8bbd2ede7ba070"),
    countryId:ObjectId("61a553c33b8bbd2ede7ba06f"),
    church:"La Comunidad",
    email:"hsamueljackson4@gmail.com",
    registerDate:new Date()
})

db.student.insert({
    names:"Sonia Marcia",
    lastNames:"Condorino Duran",
    address:"Obrajes c/21",
    telephone:NumberInt(2782726),
    cityId:ObjectId("61a5548a3b8bbd2ede7ba070"),
    countryId:ObjectId("61a553c33b8bbd2ede7ba06f"),
    church:"La Comunidad",
    email:"soniamarcia@gmail.com",
    registerDate:new Date()
})
db.student.insert({
    names:"Ruth Claudia",
    lastNames:"Condorino Duran",
    address:"Septimo anillo",
    telephone:NumberInt(2782726),
    cityId:ObjectId("61a5548b3b8bbd2ede7ba072"),
    countryId:ObjectId("61a553c33b8bbd2ede7ba06f"),
    church:"El Jordan",
    email:"claudiacd@gmail.com",
    registerDate:new Date()
})
//students from la paz
db.student.find({cityId:ObjectId("61a5548a3b8bbd2ede7ba070")}).pretty()
//students from santa cruz
db.student.find({cityId:ObjectId("61a5548b3b8bbd2ede7ba072")}).pretty()
//course records
//marcia
db.course_record.insert({
    studentId:ObjectId("61a557573b8bbd2ede7ba084"),
    courseId:ObjectId("61a556633b8bbd2ede7ba07b"),
    deliveryDate:new Date()
})
//samu
db.course_record.insert({
    studentId:ObjectId("61a557573b8bbd2ede7ba085"),
    courseId:ObjectId("61a556633b8bbd2ede7ba07b"),
    deliveryDate:new Date()
})
db.course_record.insert({
    studentId:ObjectId("61a557573b8bbd2ede7ba085"),
    courseId:ObjectId("61a556633b8bbd2ede7ba07c"),
    deliveryDate:new Date()
})
db.course_record.insert({
    studentId:ObjectId("61a557573b8bbd2ede7ba085"),
    courseId:ObjectId("61a5566d3b8bbd2ede7ba081"),
    deliveryDate:new Date()
})


db.course_record.find()

// db.courses.find({_id:ObjectId("6192871f1dd275e77af306fa")}).pretty()
// db.course_record.find({userId:ObjectId("61928ab01dd275e77af30704")}).aggregate([{$lookup:{from:"courses",localField:"courseId",foreignField:"_id",as:"course"}}]).pretty()

//samu
//todos los cursos de samu
db.course_record.aggregate([{$match:{studentId:ObjectId("61a557573b8bbd2ede7ba085")}},{$lookup:{from:"course",localField:"courseId",foreignField:"_id",as:"course"}}]).pretty()
//todos los cursos del ciclo 1 de samu
db.course_record.aggregate([{$match:{studentId:ObjectId("61a557573b8bbd2ede7ba085")}},{$lookup:{from:"course",localField:"courseId",foreignField:"_id",as:"course"}},{$match:{"course.cycleId":ObjectId("61a555083b8bbd2ede7ba079")}}]).pretty()
//todos los cursos del ciclo 2 de samu
db.course_record.aggregate([{$match:{studentId:ObjectId("61a557573b8bbd2ede7ba085")}},{$lookup:{from:"course",localField:"courseId",foreignField:"_id",as:"course"}},{$match:{"course.cycleId":ObjectId("61a555093b8bbd2ede7ba07a")}}]).pretty()
//todos los cursos de marcia
db.course_record.aggregate([{$match:{studentId:ObjectId("61a557573b8bbd2ede7ba084")}},{$lookup:{from:"course",localField:"courseId",foreignField:"_id",as:"course"}}]).pretty()

