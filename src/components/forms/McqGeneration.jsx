import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const McqGeneration = () => {

    const {register,handleSubmit} = useForm()
    const [questionList, setquestionList] = useState([])
    const submitHandler = (data)=>{
        //console.log(data)
        var options =[]
        options.push(data.option1)
        options.push(data.option2)
        options.push(data.option3)
        options.push(data.option4)
        
        var questionObj = {
            question:data.question,
            optioins:options,
            correctOpt:data.correctOption
            
        }
        //console.log(questionObj)
        //questions = questionList.push(questionObj)
        setquestionList([...questionList,questionObj])
        
    }
  return (
    <div>
        <h1>McqGeneration</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>QUESTION</label>
                <input type='text' {...register("question")}></input>
            </div>
            <div>
                <label>option 1</label>
                <input type='text' placeholder='enter option 1' {...register("option1")}></input>
            </div>
            <div>
                <label>option 2</label>
                <input type='text' placeholder='enter option 2' {...register("option2")}></input>
            </div>
            <div>
                <label>option 3</label>
                <input type='text' placeholder='enter option 3' {...register("option3")}></input>
            </div>
            <div>
                <label>option 4</label>
                <input type='text' placeholder='enter option 4' {...register("option4")}></input>
            </div>
            <div>
                <label>correct option</label>
                <input type='text' placeholder='correctOption enter option no' {...register("correctOption")}></input>
            </div>
            <div>
                <input type='submit' value="submit"></input>
            </div>
        </form>
        <div>
            <h1>QUESTIONS</h1>
            {
                questionList.map((question)=>{
                    return<div>
                        <h1>Question = {question.question}</h1>
                        {
                            question.optioins.map((op)=>{
                                return<li>{op}</li>
                            })
                        }
                        </div>
                })
            }
        </div>
    </div>
  )
}
