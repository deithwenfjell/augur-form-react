import {FC} from "react";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {IndicatorsDto} from "../dto/indicators.dto";
import {
    Box,
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    TextField
} from "@mui/material";
import axios from "axios";
import {ResultDto} from "../dto/result.dto";

type Props = {
    result: number,
    setResult: (res: number) => void,
    setOpen: (b: boolean) => void,
}
export const Form: FC<Props> = (props: Props) => {
    const { register, handleSubmit } = useForm<IndicatorsDto>();
    const handleOpen = () => props.setOpen(true);
    const onSubmit: SubmitHandler<IndicatorsDto> = async (stringData, event) => {
        console.log(stringData);
        const data = new IndicatorsDto();
        data.HighBP = parseFloat((stringData.HighBP as any));
        data.HighChol = parseFloat((stringData.HighChol as any));
        data.CholCheck =parseFloat((stringData.CholCheck as any));
        data.BMI =parseFloat((stringData.BMI as any));
        data.Smoker =parseFloat((stringData.Smoker as any));
        data.Stroke =parseFloat((stringData.Stroke as any));
        data.HeartDiseaseorAttack =parseFloat((stringData.HeartDiseaseorAttack as any));
        data.PhysActivity =parseFloat((stringData.PhysActivity as any));
        data.Fruits =parseFloat((stringData.Fruits as any));
        data.Veggies =parseFloat((stringData.Veggies as any));
        data.HvyAlcoholConsump =parseFloat((stringData.HvyAlcoholConsump as any));
        data.AnyHealthcare =parseFloat((stringData.AnyHealthcare as any));
        data.NoDocbcCost =parseFloat((stringData.NoDocbcCost as any));
        data.GenHlth =parseFloat((stringData.GenHlth as any));
        data.MentHlth =parseFloat((stringData.MentHlth as any));
        data.PhysHlth =parseFloat((stringData.PhysHlth as any));
        data.DiffWalk =parseFloat((stringData.DiffWalk as any));
        data.Sex =parseFloat((stringData.Sex as any));
        data.Age =parseFloat((stringData.Age as any));
        data.Education =parseFloat((stringData.Education as any));
        data.Income =parseFloat((stringData.Income as any));

        console.log(data);
        let res;
        try {
            res = await axios.post<ResultDto>('/predictor', data);
            console.log(res.data);
            // @ts-ignore
            props.setResult(res.data.result);
            handleOpen();
        } catch (e) {
            console.log(e);
        }
    };

    return (

        <FormControl>
            <Box component='form' onSubmit={handleSubmit(onSubmit)}>
                <FormLabel id="demo-row-radio-buttons-group-label">Krvn?? tlak</FormLabel>
                <RadioGroup
                    // row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value="0.0" control={<Radio {...register('HighBP')} value={0}/>} label="Krvn?? tlak v norme" />
                    <FormControlLabel value="1.0" control={<Radio {...register('HighBP')} value={1}/>} label="Vysok?? krvn?? tlak" />

                </RadioGroup>

                <FormLabel id="demo-row-radio-buttons-group-label">Cholesterol</FormLabel>
                <RadioGroup
                    // row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value="0.0" control={<Radio {...register('HighChol')} value={0}/>} label="Cholesterol v norme" />
                    <FormControlLabel value="1.0" control={<Radio {...register('HighChol')} value={1}/>} label="Vysok?? cholesterol" />

                </RadioGroup>

                <FormLabel id="demo-row-radio-buttons-group-label">Kontrola cholesterolu v horizonte 5 rokov</FormLabel>
                <RadioGroup
                    // row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value="0.0" control={<Radio {...register('CholCheck')} value={0}/>} label="Nebola" />
                    <FormControlLabel value="1.0" control={<Radio {...register('CholCheck')} value={1}/>} label="Bola" />

                </RadioGroup>
                <Box>
                    <TextField type="number" id="outlined-basic" label="BMI index" variant="outlined" InputProps={{ inputProps: { min: 10, max: 50 }}} {...register('BMI')}/>
                </Box>

                <FormLabel id="demo-row-radio-buttons-group-label">Faj??iar - viac ako 100 cigariet ta ??ivot</FormLabel>
                <RadioGroup
                    // row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value="0.0" control={<Radio {...register('Smoker')} value={0}/>} label="Nie" />
                    <FormControlLabel value="1.0" control={<Radio {...register('Smoker')} value={1}/>} label="??no" />

                </RadioGroup>

                <FormLabel id="demo-row-radio-buttons-group-label">M??tvica</FormLabel>
                <RadioGroup
                    // row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value="0.0" control={<Radio {...register('Stroke')} value={0}/>} label="Nie"/>
                    <FormControlLabel value="1.0" control={<Radio {...register('Stroke')} value={1}/>} label="??no" />

                </RadioGroup>

                <FormLabel id="demo-row-radio-buttons-group-label">Infarkt alebo srdcovo cievne ochorenie</FormLabel>
                <RadioGroup
                    // row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value="0.0" control={<Radio {...register('HeartDiseaseorAttack')} value={0}/>} label="Nie"/>
                    <FormControlLabel value="1.0" control={<Radio {...register('HeartDiseaseorAttack')} value={1}/>} label="??no" />

                </RadioGroup>

                <FormLabel id="demo-row-radio-buttons-group-label">Fyzick?? aktivita</FormLabel>
                <RadioGroup
                    // row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value="0.0" control={<Radio {...register('PhysActivity')} value={0}/>} label="Nie"/>
                    <FormControlLabel value="1.0" control={<Radio {...register('PhysActivity')} value={1}/>} label="??no" />

                </RadioGroup>

                <FormLabel id="demo-row-radio-buttons-group-label">Konzum??cia ovocia</FormLabel>
                <RadioGroup
                    // row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value="0.0" control={<Radio {...register('Fruits')} value={0}/>} label="Nie"/>
                    <FormControlLabel value="1.0" control={<Radio {...register('Fruits')} value={1}/>} label="??no" />

                </RadioGroup>


                <FormLabel id="demo-row-radio-buttons-group-label">Konzum??cia zeleniny</FormLabel>
                <RadioGroup
                    // row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value="0.0" control={<Radio {...register('Veggies')} value={0}/>} label="Nie"/>
                    <FormControlLabel value="1.0" control={<Radio {...register('Veggies')} value={1}/>} label="??no" />

                </RadioGroup>


                <FormLabel id="demo-row-radio-buttons-group-label">Vysok?? spotreba alkoholu</FormLabel>
                <RadioGroup
                    // row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value="0.0" control={<Radio {...register('HvyAlcoholConsump')} value={0}/>} label="Nie"/>
                    <FormControlLabel value="1.0" control={<Radio {...register('HvyAlcoholConsump')} value={1}/>} label="??no" />

                </RadioGroup>


                <FormLabel id="demo-row-radio-buttons-group-label">Pr??stup k zdravotnej starostlivosti</FormLabel>
                <RadioGroup
                    // row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value="0.0" control={<Radio {...register('AnyHealthcare')} value={0}/>} label="Nie"/>
                    <FormControlLabel value="1.0" control={<Radio {...register('AnyHealthcare')} value={1}/>} label="??no" />

                </RadioGroup>


                <FormLabel id="demo-row-radio-buttons-group-label">Odradenie od n??v??tevy ??pecialistu z d??vodu ceny</FormLabel>
                <RadioGroup
                    // row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value="0.0" control={<Radio {...register('NoDocbcCost')} value={0}/>} label="Nie"/>
                    <FormControlLabel value="1.0" control={<Radio {...register('NoDocbcCost')} value={1}/>} label="??no" />

                </RadioGroup>

                <FormLabel id="demo-row-radio-buttons-group-label">Celkov?? zdravie</FormLabel>
                <RadioGroup
                    // row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value="1.0" control={<Radio {...register('GenHlth')} value={1}/>} label="V??born??"/>
                    <FormControlLabel value="2.0" control={<Radio {...register('GenHlth')} value={2}/>} label="Ve??mi dobr??" />
                    <FormControlLabel value="3.0" control={<Radio {...register('GenHlth')} value={3}/>} label="Dobr??" />
                    <FormControlLabel value="4.0" control={<Radio {...register('GenHlth')} value={4}/>} label="Dosta??uj??ce" />
                    <FormControlLabel value="5.0" control={<Radio {...register('GenHlth')} value={5}/>} label="Chatrn??" />

                </RadioGroup>

                <Box>
                    <TextField type="number" id="outlined-basic" label="Ment??lne zdravie - hodnoty 1 a?? 30" variant="outlined" InputProps={{ inputProps: { min: 1, max: 30 }}} {...register('MentHlth')}/>
                </Box>

                <Box>
                    <TextField type="number" id="outlined-basic" label="Fyzick?? zdravie - hodnoty 1 a?? 30" variant="outlined" InputProps={{ inputProps: { min: 1, max: 30 }}} {...register('PhysHlth')}/>
                </Box>

                <FormLabel id="demo-row-radio-buttons-group-label">??a??kosti pri choden?? alebo zdol??van?? schodov</FormLabel>
                <RadioGroup
                    // row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value="0.0" control={<Radio {...register('DiffWalk')} value={0}/>} label="Nie"/>
                    <FormControlLabel value="1.0" control={<Radio {...register('DiffWalk')} value={1}/>} label="??no" />

                </RadioGroup>

                <FormLabel id="demo-row-radio-buttons-group-label">Pohlavie</FormLabel>
                <RadioGroup
                    // row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value="1.0" control={<Radio {...register('Sex')} value={0}/>} label="??ensk??"/>
                    <FormControlLabel value="2.0" control={<Radio {...register('Sex')} value={1}/>} label="Mu??sk??" />

                </RadioGroup>

                <FormLabel id="demo-row-radio-buttons-group-label">Vek</FormLabel>
                <RadioGroup
                    // row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value="1.0" control={<Radio {...register('Age')} value={1}/>} label='18 - 24' />
                    <FormControlLabel value="2.0" control={<Radio {...register('Age')} value={2}/>} label='25 - 29' />
                    <FormControlLabel value="3.0" control={<Radio {...register('Age')} value={3}/>} label='30 - 34' />
                    <FormControlLabel value="4.0" control={<Radio {...register('Age')} value={4}/>} label='35 - 39' />
                    <FormControlLabel value="5.0" control={<Radio {...register('Age')} value={5}/>} label='40 - 44' />
                    <FormControlLabel value="5.0" control={<Radio {...register('Age')} value={6}/>} label='45 - 49' />
                    <FormControlLabel value="5.0" control={<Radio {...register('Age')} value={7}/>} label='50 - 54' />
                    <FormControlLabel value="5.0" control={<Radio {...register('Age')} value={8}/>} label='55 - 59' />
                    <FormControlLabel value="5.0" control={<Radio {...register('Age')} value={9}/>} label='60 - 64' />
                    <FormControlLabel value="5.0" control={<Radio {...register('Age')} value={10}/>} label='65 - 69' />
                    <FormControlLabel value="5.0" control={<Radio {...register('Age')} value={11}/>} label='70 - 74' />
                    <FormControlLabel value="5.0" control={<Radio {...register('Age')} value={12}/>} label='75 - 80' />
                    <FormControlLabel value="5.0" control={<Radio {...register('Age')} value={13}/>} label='80 a viac' />

                </RadioGroup>

                <FormLabel id="demo-row-radio-buttons-group-label">Vzdelanie</FormLabel>
                <RadioGroup
                    // row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value="1.0" control={<Radio {...register('Education')} value={1}/>} label='??iadne'/>
                    <FormControlLabel value="2.0" control={<Radio {...register('Education')} value={2}/>} label='Z??kladn??' />
                    <FormControlLabel value="3.0" control={<Radio {...register('Education')} value={3}/>} label='Stredo??kolsk?? bez maturity' />
                    <FormControlLabel value="4.0" control={<Radio {...register('Education')} value={4}/>} label='Stredo??kolsk?? s maturitou' />
                    <FormControlLabel value="5.0" control={<Radio {...register('Education')} value={5}/>} label='V?? ??t??dium' />
                    <FormControlLabel value="5.0" control={<Radio {...register('Education')} value={6}/>} label='V?? ??t??dium dokon??en??' />

                </RadioGroup>

                <FormLabel id="demo-row-radio-buttons-group-label">Pr??jem za rok</FormLabel>
                <RadioGroup
                    // row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value="1.0" control={<Radio {...register('Income')} value={1}/>} label="Menej ako $9,999"  />
                    <FormControlLabel value="2.0" control={<Radio {...register('Income')} value={2}/>} label="$10,000 - $14,999" />
                    <FormControlLabel value="3.0" control={<Radio {...register('Income')} value={3}/>} label="$15,000 - $19,999" />
                    <FormControlLabel value="4.0" control={<Radio {...register('Income')} value={4}/>} label="$20,000 - $24,999" />
                    <FormControlLabel value="5.0" control={<Radio {...register('Income')} value={5}/>} label="$25,000 - $34,999" />
                    <FormControlLabel value="5.0" control={<Radio {...register('Income')} value={6}/>} label="$35,000- $49,999"  />
                    <FormControlLabel value="5.0" control={<Radio {...register('Income')} value={7}/>} label="$50,000- $74,999"  />
                    <FormControlLabel value="5.0" control={<Radio {...register('Income')} value={8}/>} label="$75,000 alebo viac"/>

                </RadioGroup>

                <Button type="submit" variant="contained">Odosla??</Button>
            </Box>

        </FormControl>


    );
}
