import React, { Component, Fragment } from "react";
import ReactEcharts from "echarts-for-react";
import { echartOptions } from "@gull";
import { ObtenirHistorique } from "app/redux/actions/RapportEvaluationActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";


class LineChart4 extends Component {

  constructor(props) {
    super(props)
    // first method
    this.state = {
      option: {
        ...echartOptions.lineSplitNoAxis,
        grid: {
          top: 15,
          left: 35,
          right: 35,
          bottom: 0
        },
        series: [
          {
            data: [],
            lineStyle: {
              color: "rgba(102, 51, 153, 0.8)",
              width: 3,
              ...echartOptions.lineShadow
            },
            label: { show: false, color: "#212121" },
            type: "line",
            smooth: true,
            itemStyle: {
              borderColor: "rgba(102, 51, 153, 1)"
            }
          }
        ]
      }
    }
  }

  componentDidMount() {
  


    
    

  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    let dataHistorique;
    let chartData =[];
    let opt ={};
   
    if (prevProps.historique != this.props.historique){

      if (this.props.historique.hits) {

        if (this.props.historique.hits.length > 0) {
          dataHistorique = this.props.historique.hits[0].Hist;
          if (dataHistorique) {
            console.log("Donnees historique", dataHistorique);
           // { annee: evenement.anneeVente, prix: evenement.prixVente }
            chartData = dataHistorique.map(evenement => (evenement.prixVente));
            console.log("chardata", chartData);
            
             opt  = {
              ...echartOptions.lineSplitNoAxis,
              grid: {
                top: 15,
                left: 35,
                right: 35,
                bottom: 0
              },
              series: [
                {
                  data:chartData,
                  lineStyle: {
                    color: "rgba(102, 51, 153, 0.8)",
                    width: 3,
                    ...echartOptions.lineShadow
                  },
                  label: { show: true, color: "#212121" },
                  type: "line",
                  smooth: true,
                  itemStyle: {
                    borderColor: "rgba(102, 51, 153, 1)"
                  }
                }
              ]
            };
            this.setState({option:opt});
          }
        
  
  
        }else {

          opt  = {
            ...echartOptions.lineSplitNoAxis,
            grid: {
              top: 15,
              left: 35,
              right: 35,
              bottom: 0
            },
            series: [
              {
                data:[],
                lineStyle: {
                  color: "rgba(102, 51, 153, 0.8)",
                  width: 3,
                  ...echartOptions.lineShadow
                },
                label: { show: true, color: "#212121" },
                type: "line",
                smooth: true,
                itemStyle: {
                  borderColor: "rgba(102, 51, 153, 1)"
                }
              }
            ]
          };
          this.setState({option:opt});
        }
  
      }



    }





  }
  render() {
    const { option } = this.state;
    console.log("option", option);
    return <ReactEcharts style={{ height: this.props.height }} option={option} />;

  }


}
const mapStateToProps = state => ({
  ObtenirHistorique: PropTypes.func.isRequired,
  historique: state.rapport.historique
});

export default connect(mapStateToProps, {
  ObtenirHistorique
})(LineChart4);



