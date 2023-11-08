import { motion } from 'framer-motion';
function Box() {
    return(
        <motion.div
            style={{
                margin: '100px 0px',
                width: '100px',
                height: '100px',
                background: 'blue'
            }}
            initial= {{opacity: 0, scale: 0, x: 500, rotate: '45deg'}}
            whileInView= {{opacity: 1, scale: 1, x: 0, rotate: '0deg'}}
            transition={{duration: 0.6}}
            viewport={{once: true}}
        >

        </motion.div>
    )
}
export default Box;
