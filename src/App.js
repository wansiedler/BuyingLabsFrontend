import React, {useState} from "react";
import {Container, makeStyles} from "@material-ui/core";
import {Search} from "./Search";
import {Filters} from "./Filters";
import {Hotels} from "./Hotels";
import {BookingDialog} from "./BookingDialog";
import dayjs from "dayjs";

const useStyles = makeStyles({
    container: {
        padding: "1rem",
    },
    results: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "1rem",
        width: "100%",
    },
});
const App = () => {
    const classes = useStyles();
    const [cityCode, setCityCode] = useState("");
    const [offerId, setOfferId] = useState(null);
    const [adults, setPersons] = useState(1);
    const [checkInDate, setCheckInDate] = useState(dayjs());
    const [checkOutDate, setCheckOutDate] = useState(dayjs().add(1, "day"));

    return (
        <Container maxWidth="sm" className={classes.container}>
            <div>
                <Search setCityCode={setCityCode} />
            </div>
            <Filters
                checkInDate={checkInDate}
                checkOutDate={checkOutDate}
                setCheckInDate={setCheckInDate}
                setCheckOutDate={setCheckOutDate}
                setPersons={setPersons}
                adults={adults}
            />
            <div className={classes.results}>
                <Hotels
                    cityCode={cityCode}
                    checkInDate={checkInDate}
                    checkOutDate={checkOutDate}
                    setOfferId={setOfferId}
                    adults={adults}
                />
            </div>
            <BookingDialog offerId={offerId} setOfferId={setOfferId}/>
        </Container>
    );
};

export {App};
