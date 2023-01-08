import {FC} from "react";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {IndicatorsDto} from "../dto/indicators.dto";
import {Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField} from "@mui/material";
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
    const onSubmit: SubmitHandler<IndicatorsDto> = async (data, event) => {
        console.log(data);
        const demoData = {
            "HighBP": 0,
            "HighChol": 0,
            "CholCheck": 0,
            "BMI": 0,
            "Smoker": 0,
            "Stroke": 0,
            "HeartDiseaseorAttack": 0,
            "PhysActivity": 0,
            "Fruits": 0,
            "Veggies": 0,
            "HvyAlcoholConsump": 0,
            "AnyHealthcare": 0,
            "NoDocbcCost": 0,
            "GenHlth": 0,
            "MentHlth": 0,
            "PhysHlth": 0,
            "DiffWalk": 0,
            "Sex": 0,
            "Age": 0,
            "Education": 0,
            "Income": 0
        }
        let res;
        try {
            res = await axios.post<ResultDto>('/predictor', demoData);
            console.log(res.data);
            // @ts-ignore
            props.setResult(res.data.result);
            handleOpen();
        } catch (e) {
            console.log(e);
        }
    };

    return (
        // <Box   component="form"
        //        sx={{
        //                '& .MuiTextField-root': { m: 1, width: '25ch' },
        //        }}
        //        noValidate
        //        autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        //     <TextField id="outlined-basic" label="Vysoký krvný tlak" variant="outlined" {...register('HighBP')} />
        //     <TextField id="outlined-basic" label="Vysoký cholesterol" variant="outlined" {...register('HighChol')}/>
        //     <TextField id="outlined-basic" label="Kontrola cholesterolu v horizonte 5 rokov " variant="outlined" {...register('CholCheck')}/>
        //     <TextField id="outlined-basic" label="BMI index" variant="outlined" {...register('BMI')}/>
        //     <TextField id="outlined-basic" label="Fajčiar" variant="outlined" {...register('Smoker')}/>
        //     <TextField id="outlined-basic" label="Mŕtvica" variant="outlined" {...register('Stroke')}/>
        //     <TextField id="outlined-basic" label="Infarkt alebo srdcovo cievne ochorenie " variant="outlined" {...register('HeartDiseaseorAttack')}/>
        //     <TextField id="outlined-basic" label="Fyzická aktivita" variant="outlined" {...register('PhysActivity')}/>
        //     <TextField id="outlined-basic" label="Konzumácia ovocia" variant="outlined" {...register('Fruits')}/>
        //     <TextField id="outlined-basic" label="Konzumácia zeleniny" variant="outlined" {...register('Veggies')}/>
        //     <TextField id="outlined-basic" label="Vysoká spotreba alkoholu" variant="outlined" {...register('HvyAlcoholConsump')}/>
        //     <TextField id="outlined-basic" label="Prístup k zdravotnej starostlivosti " variant="outlined" {...register('AnyHealthcare')}/>
        //     <TextField id="outlined-basic" label="Odradenie od návštevy špecialistu z dôvodu ceny " variant="outlined" {...register('NoDocbcCost')}/>
        //     <TextField id="outlined-basic" label="elkové zdravie" variant="outlined" {...register('GenHlth')}/>
        //     <TextField id="outlined-basic" label="Mentálne zdravie" variant="outlined" {...register('MentHlth')}/>
        //     <TextField id="outlined-basic" label="Fyzické zdravie" variant="outlined" {...register('PhysHlth')}/>
        //     <TextField id="outlined-basic" label="ažkosti pri chodení alebo zdolávaní schodov " variant="outlined" {...register('DiffWalk')}/>
        //     <TextField id="outlined-basic" label="Pohlavie" variant="outlined" {...register('Sex')}/>
        //     <TextField id="outlined-basic" label="Vek" variant="outlined" {...register('Age')}/>
        //     <TextField id="outlined-basic" label="Vzdelanie" variant="outlined" {...register('Education')}/>
        //     <TextField id="outlined-basic" label="Príjem" variant="outlined" {...register('Income')}/>
        //     <Button type="submit" variant="contained">Odoslať</Button>
        // </Box>

        <FormControl>
            <Box component='form' onSubmit={handleSubmit(onSubmit)}>
                <FormLabel id="demo-row-radio-buttons-group-label">Krvný tlak</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value="0.0" control={<Radio {...register('HighBP')} value={0}/>} label="Krvný tlak v norme" />
                    <FormControlLabel value="1.0" control={<Radio {...register('HighBP')} value={1}/>} label="Vysoký krvný tlak" />

                </RadioGroup>

                <FormLabel id="demo-row-radio-buttons-group-label">Cholesterol</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value="0.0" control={<Radio {...register('HighChol')} value={0}/>} label="Cholesterol v norme" />
                    <FormControlLabel value="1.0" control={<Radio {...register('HighChol')} value={1}/>} label="Vysoký cholesterol" />

                </RadioGroup>

                <FormLabel id="demo-row-radio-buttons-group-label">Kontrola cholesterolu v horizonte 5 rokov</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value="0.0" control={<Radio {...register('CholCheck')} value={0}/>} label="Nebola" />
                    <FormControlLabel value="1.0" control={<Radio {...register('CholCheck')} value={1}/>} label="Bola" />

                </RadioGroup>
                <Box>
                    <TextField id="outlined-basic" label="BMI index" variant="outlined" {...register('BMI')}/>
                </Box>

                <FormLabel id="demo-row-radio-buttons-group-label">Fajčiar</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value="0.0" control={<Radio {...register('Smoker')} value={0}/>} label="Nie" />
                    <FormControlLabel value="1.0" control={<Radio {...register('Smoker')} value={1}/>} label="Áno" />

                </RadioGroup>

                <FormLabel id="demo-row-radio-buttons-group-label">Mŕtvica</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value="0.0" control={<Radio {...register('Stroke')} value={0}/>} label="Nie"/>
                    <FormControlLabel value="1.0" control={<Radio {...register('Stroke')} value={1}/>} label="Áno" />

                </RadioGroup>

                <FormLabel id="demo-row-radio-buttons-group-label">Infarkt alebo srdcovo cievne ochorenie</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value="0.0" control={<Radio {...register('HeartDiseaseorAttack')} value={0}/>} label="Nie"/>
                    <FormControlLabel value="1.0" control={<Radio {...register('HeartDiseaseorAttack')} value={1}/>} label="Áno" />

                </RadioGroup>

                <FormLabel id="demo-row-radio-buttons-group-label">Mŕtvica</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value="0.0" control={<Radio {...register('Stroke')} value={0}/>} label="Nie"/>
                    <FormControlLabel value="1.0" control={<Radio {...register('Stroke')} value={1}/>} label="Áno" />

                </RadioGroup>
                <Button type="submit" variant="contained">Odoslať</Button>
            </Box>

        </FormControl>


    );
}
