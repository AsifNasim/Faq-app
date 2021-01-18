//  this will contain Faq with their answer, the list will be from the simple JSON file

import React from 'react'
import {
    Box,
    Text,
    Flex,
    Heading,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'
// we need to import JSON file
import FAQ_JSON from './faq.json'

// destructing both index and setIndex props here
export const Faq = ({index, setIndex}) => {
    return (
        <Flex direction="column" p="4">
            <Box mb="8">
                <Heading size="md">
                    Frequenty Asked Question
                </Heading>
            </Box>

            <Accordion allowToggle index={index}>
                {
                    FAQ_JSON.map(faq =>(
                        <AccordionItem key= {faq.id} name = {`accordion-item-${faq.id}`}>
                            {/* the collapsed content */}
                            <AccordionButton onClick = {setIndex(faq.id-1)} >
                            <Box flex="1" textAlign="left">
                                <Text fontStyle="semibold">{faq.question}</Text>
                            </Box>
                            </AccordionButton>
                            {/* the exppanded content */}
                            <AccordionPanel pb="4">
                                {faq.answer}
                            </AccordionPanel>
                        </AccordionItem>
                    ))
                }
            </Accordion>

        </Flex>
    )
}


