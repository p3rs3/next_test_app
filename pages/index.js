import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import useStyles from "./style";

export default function Page({data}) {
    return (
        <MyWonderfulComponent 
            id="id"
            options={{
                params: {
                    fields: {
                        isDynamic: true
                    }
                }
            }}
            data={data}
            other={{
                count: 1
            }}
        >
            I'm text from a component
        </MyWonderfulComponent>
    );
}

export function getStaticProps() {
    const data = 'Hello from SSR';
    console.log(data);

    return {
        props: {
            data,
        }
    }
}

function MyWonderfulComponent({other, id, options, children}) {
    const classes = useStyles();
    const [ summ, setSumm ] = useState(other.count);

    useEffect(() => {
        if (id && options && options.params && options.params.fields && options.params.fields.isDynamic) {
            setSumm(summ + 1);
        }
    }, []);

    return (
        <>
            <h1 className={classes.title}>
                Hello World!
            </h1>
            <Grid>
                <Grid item xs={12}>
                    {children}
                </Grid>
                <Grid>
                    {summ}
                </Grid>
            </Grid>
        </>
    );
}