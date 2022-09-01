
import { describe, expect, test } from 'vitest'
import { lengthCheck } from './checkLength'


describe("lengthCheck()",()=>{
    test('testing the form functionality of grabbing input values', ()=>{
        const firstName = 'Testing'
        const result = lengthCheck(firstName)
        console.log(result)
        expect(result).toBe('passed')
    })
})

