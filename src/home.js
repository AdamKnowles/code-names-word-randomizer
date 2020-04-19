import React, { useState, useEffect, useRef } from "react"
import { Button, Alert} from 'reactstrap'
import list from './fullList'



const CodeNames = props => {

    
    let finalList = []
    let randomNumbers = []
    const [words, setWords] = useState()
    
    function getWords() {
        for(let i = 0; i < 400; i++){
            randomNumbers.push(Math.floor(Math.random() * list.length))
        }

        randomNumbers.forEach(random => {
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
    <div id='words'>
        <p id='word-list'>{words}</p>
    </div>
    </>
  )
}

export default CodeNames
