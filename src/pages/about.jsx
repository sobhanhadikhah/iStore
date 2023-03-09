import React, { useContext, useState } from 'react'
import productsContext from '../context/context';
import { motion } from 'framer-motion';
import { BoxVarint, fadeIn, listVaritions } from '../motion/motion';

const About = () => {
    const { dataP } = useContext(productsContext);
    const [animate, setAnimate] = useState(false)
    return (
        <div className='max-w-[1240px] mx-auto  ' >
            <div className='my-24 flex justify-center ' >
                <motion.h1

                    whileHover={{
                        rotate: 10,
                        transition: {
                            damping: 10,
                            type: "spring",
                            stiffness: 120
                        }
                    }}

                    initial={{
                        scale: 0.7,
                        opacity: 0.1,


                    }}
                    animate={{
                        scale: 1,
                        opacity: 2,
                        transition: {
                            duration: 1,
                            delay: 1
                        }
                    }}
                    className='text-xl bg-purple-700 w-fit text-white  lg:text-9xl rounded-md cursor-pointer px-3   font-SFPRODISPLAYREGULAR  font-bold text-center my-6  ' >
                    Welcome
                </motion.h1>



            </div>
            <div className=' h-screen ' >

                <motion.div
                    onClick={() => setAnimate(!animate)}
                    initial={{

                        x: 0
                    }}
                    transition={{

                        type: "spring",
                        stiffness: 60

                    }}

                    animate={{

                        opacity: animate ? 1 : 0.3,
                        x: animate ? "93vh" : 0,
                        rotate: animate ? 360 : 0
                    }}
                    className='w-[10rem] z-50 lg:w-[20rem] lg:h-[20rem]  h-[10rem] grid  gap-3 justify-center   place-content-cente  bg-purple-500 rounded-xl my-8 cursor-pointer  ' >
                    <div className='grid grid-row-3 gap-6 justify-center   place-content-center      ' >
                        <div className='w-[80px] h-[80px] rounded-2xl  bg-white' ></div>
                        <div className='w-[5rem] rounded-2xl    h-[5rem] bg-white' ></div>
                        <div className='w-[5rem] rounded-2xl    h-[5rem] bg-white' ></div>
                    </div>
                </motion.div>

                <div className='max-w-[1240px] mx-auto ' >
                    <motion.div
                        drag
                        dragConstraints={{
                            right: 0,
                            left: 0,
                            top: 0,
                            bottom: 0
                        }}

                        whileHover={{
                            scale: 1.1,
                            transition: {
                                type: "tween",
                                duration: 0.3

                            }
                        }}
                        whileTap={{

                            scale: 0.9,
                            transition: {
                                duration: 0.1
                            }
                        }}

                        className='bg-black h-[300px] rounded-3xl w-[300px]  ' >

                    </motion.div>
                </div>

            </div>
            <div
                className='h-screen my-32  ' >
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptate eum praesentium ex odit incidunt! Consectetur sapiente tempore delectus quibusdam quod totam possimus pariatur atque! Perferendis accusantium molestiae quod quas esse numquam magnam velit natus impedit similique est totam quos consequuntur asperiores quia iusto quasi nobis consectetur sapiente quae, quo debitis, vero culpa? Modi quisquam impedit tempore sed, aspernatur voluptas sunt rem, ea deserunt maiores repellendus a beatae ducimus amet debitis odio eos voluptatibus error iste inventore! Minus corporis quam, ipsam, molestiae sed quaerat sunt modi omnis nobis cupiditate pariatur nostrum. Dolor alias aut distinctio unde nisi possimus totam velit error! Assumenda iste labore numquam repellat asperiores, repudiandae dolores temporibus ea cumque consequuntur! Iure tempore hic ipsam voluptates magnam ducimus dicta nemo facere natus quam. Expedita nisi saepe quis dicta commodi delectus. Ea enim repellat incidunt modi voluptatem quis quasi iure illum nihil reprehenderit, harum nobis dolorum eligendi minima necessitatibus animi ipsa natus ipsam cupiditate in neque quos. Saepe corrupti quod incidunt dolores accusamus optio molestias itaque distinctio voluptatum quisquam ipsum facere, aliquid earum, neque porro nostrum natus, quidem culpa nobis adipisci? Aliquam, obcaecati facilis amet voluptatibus totam aperiam sunt suscipit, magnam iste nihil quos voluptatem a. Architecto, ea vel. Deserunt magni ex illum aspernatur repudiandae earum. Maxime adipisci architecto incidunt, quidem aliquam porro aliquid blanditiis soluta doloribus, explicabo eveniet at natus, fuga cumque omnis. Nulla numquam est libero, et similique quos modi! Odit totam ratione impedit vitae. Quam pariatur numquam ipsum sit, labore ipsam libero inventore quibusdam deleniti dicta illum officiis neque recusandae consequatur ex voluptatem provident earum nobis assumenda! Labore cupiditate qui culpa sed distinctio fugit architecto atque natus voluptas saepe possimus illo maxime, asperiores nostrum ut rem commodi dolorem soluta aut vero voluptatibus. Ducimus officiis voluptatum, aliquam soluta ipsa numquam autem consequuntur illo maxime aut a, quas delectus quod necessitatibus iure? Quis assumenda, repellat veritatis ipsa quam ducimus, officia provident aperiam accusantium commodi delectus iusto incidunt facere dicta molestias amet aliquam earum deleniti est vitae perspiciatis saepe? Natus nam dolorem, sit repellendus ea quo quia omnis nobis! Beatae esse ab voluptate, dolore alias, recusandae quas nam non quasi veniam, hic vero sit nisi quibusdam! Voluptates ut recusandae ea explicabo ullam distinctio quaerat id, ex vero corrupti qui nihil magnam quae adipisci ducimus eaque tenetur! Natus quos ullam commodi consequatur sequi iure sit dolore debitis aperiam nemo saepe, a est aliquam sint minima rerum praesentium eaque atque, laboriosam beatae unde. Quis perferendis accusamus, animi consequuntur porro commodi nihil sapiente aliquid, recusandae repudiandae, ad impedit perspiciatis dicta? Corrupti ducimus eum eos voluptatum repellat amet illum veritatis quidem iste ipsa earum accusantium, mollitia dolorem nisi reiciendis autem nobis aperiam inventore doloremque ad velit voluptatem eveniet sed? A, eius explicabo vitae dolorum sit voluptatum quidem aperiam ducimus rerum aspernatur perspiciatis animi ad enim eaque aliquam voluptate deserunt porro similique placeat? Rem, labore earum, nisi modi aspernatur, voluptate consequatur dignissimos iusto blanditiis incidunt voluptatum adipisci saepe ad doloremque? Voluptates officiis quia deserunt! Suscipit molestiae eum doloremque pariatur commodi in excepturi provident, nisi illum dolorem eaque delectus, nihil fuga libero tempora, repellendus id ea facere rem fugiat atque! Est quia eligendi ratione vitae natus a tempore soluta reiciendis doloremque aperiam, debitis fugiat harum dolorum iste aliquam ullam eveniet! Repellat, vitae quae, minima eveniet repellendus est, harum placeat odio possimus neque error tempora. Quo quia iure tempora expedita magnam officia optio, sunt culpa, sed fugiat maxime eveniet vel unde sequi ipsam eligendi. Alias quo ex nobis, hic beatae dolor quisquam molestiae atque eligendi repellendus sed, minus reprehenderit nesciunt repellat iste non amet ipsum deserunt. Quo dicta eligendi totam eum blanditiis saepe dolorum autem! Magnam, veniam? Accusantium libero cumque repellat dolorem maxime ex itaque totam quibusdam perferendis voluptatibus molestias expedita hic autem nostrum dolores alias harum tempore, minima commodi asperiores obcaecati error possimus. Debitis, magni, eum eos sint porro est dicta labore, ipsam odio reiciendis placeat sunt ducimus neque veniam qui! A eligendi perspiciatis hic, nihil dolor at maiores fugit. Quam voluptates ab, reiciendis cupiditate, adipisci perspiciatis porro facere nihil mollitia, exercitationem quisquam totam quibusdam architecto praesentium esse ex illum laudantium quo. Labore quas libero, eos repellendus unde voluptatum soluta atque magnam rerum deserunt nemo! Ut a aut magnam quia sed. Cupiditate illo nemo reprehenderit architecto. Sequi neque sunt optio sapiente atque magnam, a quam eligendi, cupiditate fugit id, ipsum corporis itaque quibusdam enim? A, nihil. Blanditiis fugit minima perferendis, iste ad deserunt accusamus soluta illum, magnam voluptatem fugiat. Necessitatibus praesentium unde deleniti numquam eum ea tempore expedita ullam blanditiis ratione! Obcaecati omnis nemo iusto placeat molestias reprehenderit fuga neque, consequatur velit ea blanditiis sunt dolores iure aliquid! Voluptatibus neque fuga obcaecati quia aperiam. Exercitationem nisi corporis deserunt ea, illum obcaecati repellendus nostrum accusamus at provident nemo hic maiores odit facilis omnis. Iure iusto facere consequuntur eius quaerat unde quasi fugiat dolore dolor explicabo? Veniam consectetur aut quisquam doloribus quaerat velit dolorum nihil voluptatum corporis excepturi assumenda, nam facilis necessitatibus sapiente aspernatur et exercitationem accusantium aliquam. Harum nam velit minus modi aut dicta quas blanditiis quos neque debitis, dolores iure? A magni magnam eveniet delectus est. Commodi minima voluptatibus atque veniam impedit itaque quidem perferendis maiores, neque voluptas accusantium, autem adipisci amet repellendus ipsa quia facilis voluptatem, excepturi molestiae. Aperiam, voluptatibus odio quia eveniet odit repellat quibusdam adipisci provident natus? Laborum nemo, eveniet illum natus tempore totam quisquam? Minus blanditiis sit nostrum fugit ea eos doloribus tenetur corporis reprehenderit incidunt consequuntur quaerat assumenda odit est repellat aliquid earum, qui deserunt laboriosam quo. Est voluptates, magnam dignissimos, ratione quae magni fuga mollitia hic excepturi vitae enim dolore veniam praesentium! Consectetur culpa non alias. Explicabo, sunt officiis? Facilis porro id animi debitis dolores ipsam deleniti harum et sed error laudantium tempora repellendus libero itaque, repudiandae dolore dignissimos asperiores a, hic ratione! Ratione magni laudantium aspernatur, voluptas debitis minima, deserunt corporis modi, quidem porro architecto? Hic quis aliquid reiciendis voluptates, deserunt alias natus repellendus fuga nesciunt quisquam harum, necessitatibus expedita facilis dolorem, libero corporis ut fugiat saepe accusamus sapiente voluptatum ullam iure iusto. Asperiores nihil accusantium ipsam voluptate.</p>

            </div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={BoxVarint}
                className='bg-lime-500 h-[25rem] w-[25rem] rounded-xl grid place-items-center   '   >
                {[1, 2, 3].map(box => {
                    return <motion.div  variants={listVaritions} className='bg-white h-[5rem] w-[5rem] rounded-3xl ' ></motion.div>
                })}

            </motion.div>

        </div >
    )
}

export default About