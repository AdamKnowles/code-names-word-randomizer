import React, { useState, useEffect, useRef } from "react"
import { Button, Alert} from 'reactstrap'
import list from './fullList'

const CodeNames = props => {

    let randomNumbers =  new Set()
    let finalList = []
    const [words, setWords] = useState()
    
    function getWords() {
        
        for(let i = 0; i < 400; i++){
            randomNumbers.add(Math.floor(Math.random() * list.length))
        }
        
        let randomNumbersArray = [...randomNumbers]
        
        randomNumbersArray.forEach(random => {
            list.forEach((word, index) => {
                if (random === index) {
                    finalList.push(word)
                }
            })
        })
        setWords(finalList.join(', '))
        finalList = []
    }

    function copyWords(words) {
        navigator.clipboard.writeText(words).then( () => {
            alert('IT IS COPIED')
        }, function() {
            alert("IT HAS FAILED")
        });
    }


    return (
    <>
    <div id="divButton">
        <Button type="button" id = 'button'  onClick = {() => getWords()}>New Words</Button>
        <Button type="button" id = 'button'  onClick = {() => copyWords(document.getElementById('word-list').innerText)}>Copy Words</Button>
    </div>
    <div id='words-div'>
        <p id='word-list'>{words}</p>
    </div>
    </>
  )
}

export default CodeNames
