import React, {useState} from "react";
import Select from "react-select";
import {useTranslation} from "react-i18next";

export default function Filters(props) {
    const {
        cities,
        cityValue,
        onCityChange,
        muncipalities,
        munciValue,
        onMuncipleChange,
        ownerValue,
        onOwnerChange,
        buyerCheck,
        onStatusChange,
        onDaysSubtract,
        refreshFilter,
        onDateChange,
        finalDate,
        setFinalDate,
        initialDate,
        setInitialDate,
        projectValue,
        projectStatus,
        dateFilterType = '31days',
        setDateFilterType
    } = props;
    const { t } = useTranslation();
    const [menu, setMenu] = useState(false);
    const options = [
        { value: "oui", label: t("Leads.77") },
        { value: "non", label: t("Leads.78") },
        { value: "all", label: t("Leads.79") },
    ];
    const formatter = (data) => {
        return data?.map((v) => ({
            value: v,
            label: v,
        }));
    };
    return (
        <ul className="nav row gy-3">
            <li className="col">
                <div>
                    <ul className="nav row gy-3">
                        <li className="col-12 col-md-8">
                            <div>
                                <Select
                                    placeholder={t("Leads.1")}
                                    options={cities}
                                    value={cityValue}
                                    onChange={(e) => onCityChange(e)}
                                />
                            </div>
                        </li>
                        <li className="col-12 col-md-4">
                            <div>
                                <Select
                                    placeholder={t("Leads.2")}
                                    options={muncipalities}
                                    value={munciValue}
                                    onChange={(e) => onMuncipleChange(e)}
                                />
                            </div>
                        </li>
                    </ul>
                </div>
            </li>

            <li className="col-12 col-xl-5">
                <div>
                    <ul className="nav row gy-3">
                        <li className="col-12 col-md-5">
                            <div>
                                <Select
                                    placeholder={t("Leads.3")}
                                    options={options}
                                    value={ownerValue}
                                    onChange={(e) => onOwnerChange(e)}
                                />
                            </div>
                        </li>

                        <li className="col-12 col-md-5">
                            <div>
                                <Select
                                    isDisabled={!ownerValue || ownerValue.value === "all"}
                                    placeholder={t("Leads.4")}
                                    value={projectValue}
                                    options={formatter(projectStatus)}
                                    onChange={(e) => onStatusChange(e)}
                                />
                            </div>
                        </li>

                        <li className="col-2 col-md-1 px-md-0">
                            <div>
                                <div>
                                    <button
                                        type="button"
                                        className="btn btn-outline-primary"
                                        onMouseEnter={() => setMenu(!menu)}
                                    >
                                        <i className="i-Filter-2"></i>
                                    </button>

                                    <div
                                        className={`dropdown-menu dropdown-menu-right ${
                                            menu && "show"
                                        }`}
                                        style={{width: 400}}
                                        onMouseLeave={() => setMenu(!menu)}
                                    >
                                        <div className="px-3 border-bottom pb-2 mb-2">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="days"
                                                    id="31days"
                                                    checked={dateFilterType === '31days'}
                                                    onClick={(e) => onDaysSubtract(31)}
                                                />
                                                <label className="form-check-label" htmlFor="31days">
                                                    {t("Leads.5")}
                                                </label>
                                            </div>
                                        </div>
                                        <div className="px-3 border-bottom pb-2 mb-2">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="days"
                                                    id="7days"
                                                    checked={dateFilterType === '7days'}
                                                    onClick={(e) => onDaysSubtract(7)}
                                                />
                                                <label className="form-check-label" htmlFor="7days">
                                                    {t("Leads.6")}
                                                </label>
                                            </div>
                                        </div>
                                        <div className="px-3 border-bottom pb-2 mb-2">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="days"
                                                    id="custom"
                                                    checked={dateFilterType === 'custom'}
                                                    onClick={(e) => setDateFilterType('custom')}
                                                />
                                                <div className="gy-2">
                                                    <b>{t("Leads.7")}</b>
                                                    <div className={"w-100 mb-2"}>
                                                        <input
                                                            className="form-control "
                                                            type="date"
                                                            onChange={(e) =>{
                                                                    setInitialDate(e.target.value);
                                                                    setDateFilterType('custom');
                                                                }
                                                            }
                                                            value={initialDate || ''}
                                                        />
                                                    </div>
                                                    <div className="w-100 mb-2 text-center">
                                                        {t("Leads.8")}
                                                    </div>
                                                    <div className={"w-100 mb-2"}>
                                                        <input
                                                            disabled={initialDate === null}
                                                            className="form-control "
                                                            type="date"
                                                            onChange={(e) =>
                                                                setFinalDate(e.target.value)
                                                            }
                                                            value={finalDate}
                                                        />
                                                    </div>
                                                    <div className={"px-2 d-flex justify-content-center"}>
                                                        <button
                                                            disabled={initialDate === null}
                                                            className="btn btn-primary mx-2"
                                                            type="date"
                                                            onClick={onDateChange}
                                                            style={{width: 150}}
                                                        >
                                                            {t("Leads.9")}
                                                        </button>
                                                        <button
                                                            className="btn btn-primary mx-2"
                                                            type="date"
                                                            onClick={(e) => onDaysSubtract(31)}
                                                            style={{width: 150}}
                                                        >
                                                            {t("Leads.10")}
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="col-2 col-md-1 px-md-0">
                            <div>
                                <button
                                    type="button"
                                    className="btn btn-outline-primary"
                                    onClick={refreshFilter}
                                >
                                    <i className="i-Reload"></i>
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    )
}
