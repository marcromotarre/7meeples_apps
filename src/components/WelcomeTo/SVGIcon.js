import React from "react";

const getViewBox = name => {
  switch (name) {
    case "surveyor":
      return "0 0 127.429 101.952";
    case "bis":
        return "0 0 121.756 100.672";
    case "landscaper":
        return "0 0 102.405 87.279";
    case "pool-manufacturer":
        return "0 0 134.005 77.035";
    case "real-state-agent":
        return "0 0 124.483 78.099";
    case "temp-agency":
        return "0 0 109.448 106.921";
    case "door":
        return "0 0 117.011 117.0111";
    case "next":
      return "0 0 52 52";
    case "end":
      return "0 0 52 52";
    case "previous":
      return "0 0 52 52";
    case "refresh":
      return "0 0 52 52";
    case "not_refresh":
      return "0 0 52 52";


case "city-plan-background":
return "0 0 74 197";
  
case "city-plan-level-1--1":
return "0 0 53 180";
case "city-plan-level-1--2":
return "0 0 53 180";
case "city-plan-level-1--3":
return "0 0 53 180";
case "city-plan-level-1--4":
return "0 0 53 180";
case "city-plan-level-1--5":
return "0 0 53 180";
case "city-plan-level-1--6":
return "0 0 53 180";
case "city-plan-level-1--7":
return "0 0 53 180";
case "city-plan-level-1--8":
return "0 0 53 180";
case "city-plan-level-1--9":
return "0 0 53 180";
case "city-plan-level-1--10":
return "0 0 53 180";
case "city-plan-level-1--11":
return "0 0 53 180";

case "city-plan-level-2--1":
return "0 0 53 180";
case "city-plan-level-2--2":
return "0 0 53 180";
case "city-plan-level-2--3":
return "0 0 53 180";
case "city-plan-level-2--4":
return "0 0 53 180";
case "city-plan-level-2--5":
return "0 0 53 180";
case "city-plan-level-2--6":
return "0 0 53 180";
case "city-plan-level-2--7":
return "0 0 53 180";
case "city-plan-level-2--8":
return "0 0 53 180";
case "city-plan-level-2--9":
return "0 0 53 180";
case "city-plan-level-2--10":
return "0 0 53 180";
case "city-plan-level-2--11":
return "0 0 53 180";

case "city-plan-level-3--1":
return "0 0 53 180";
case "city-plan-level-3--2":
return "0 0 53 180";
case "city-plan-level-3--3":
return "0 0 53 180";
case "city-plan-level-3--4":
return "0 0 53 180";
case "city-plan-level-3--5":
return "0 0 53 180";
case "city-plan-level-3--6":
return "0 0 53 180";
    default:
      return "0 0 32 32";
  }
};

const getPath = (name, props) => {
  switch (name) {
    case "surveyor":
      return (
        <g id="Grupo_22" data-name="Grupo 22" transform="translate(-2495.381 690.055)">
            <path id="Trazado_43" data-name="Trazado 43" d="M2540.98-600.014h-33.606V-643H2494.38l40.174-46.055,11.7,13.993h31.606v-8.59h12.268v8.59h7.224l13.389,21.621v53.426Z" transform="translate(1 -1)" fill="#beb2a6"/>
            <g id="Grupo_20" data-name="Grupo 20" transform="translate(2541.275 -666.854)">
            <path id="Unión_3" data-name="Unión 3" d="M66.622,72.793H59.707v3.673H53.978V75.105H52.616V72.793H47.14v3.673H42.176V75.105H40.815V72.793H36.258v3.635H31.032V75.067H29.67V72.793H25.617v3.673H19.833V75.105H18.472V72.793H13.66V76.92H5.735v-.106l-.817.146-.006-4.167H0V64.172H4.9L4.852,30.14H0V21.519H4.839l-.01-7.141H2.721V13.017H1.814V10.023H4.827V8.736H2.721L4.1,7.374H1.814L9.3,0l6.287,8.971h-.047l.954,1.362H13.66v.615h1.932v1.361H16.5v2.069H13.66v7.141h4.812V16.24l3.434-3.62,1.077,1.66.284-.3,2.349,3.62v3.918H29.67V16.584l3.167-3.85.978,1.827L34.2,14.1l2.06,3.85v3.574h4.557V16.035l3-3.684.977,1.833.384-.472L47.14,17.4v4.122h5.476V16.327l3.869-3.869,1.11,1.613.251-.251,1.861,2.7v5H66.55l-.01-7.141H64.431V13.017h-.907V10.023h3.014V8.736H64.431l1.383-1.361h-2.29L71.015,0,77.3,8.971h-.047l.954,1.362H75.37v.615H77.3v1.361h.907v2.069H75.37v7.141h2.222V30.14H75.37V64.172h2.222v8.621H75.37V76.92H67.445v-.106l-.817.146Zm-.012-8.621L66.562,30.14H59.707V64.172Zm-13.994,0V30.14H47.14V64.172Zm-11.8,0V30.14H36.258V64.172Zm-11.145,0V30.14H25.617V64.172Zm-11.2,0V30.14H13.66V64.172Z" transform="translate(0.443 0)" fill="none" stroke="#d4cfb9" strokeWidth="3"/>
            <g id="Grupo_19" data-name="Grupo 19" transform="translate(0 0)">
                <path id="Trazado_48" data-name="Trazado 48" d="M2742.6-558.964l7.835-1.4v-62.542h2.839v-2.069h-2.839v-1.976h2.839l-6.287-8.971-7.49,7.374h3.014v2.649H2739.5v2.993h3.014Z" transform="translate(-2675.531 635.924)" fill="#686367"/>
                <path id="Trazado_49" data-name="Trazado 49" d="M2742.511-560.365h7.925v-62.542h2.839v-2.069h-2.839v-1.976h2.839l-6.287-8.971-7.49,7.374h3.014v2.649H2739.5v2.993h3.014Z" transform="translate(-2674.624 637.286)" fill="#fefeff"/>
                <path id="Trazado_50" data-name="Trazado 50" d="M2742.6-558.964l7.835-1.4v-62.542h2.839v-2.069h-2.839v-1.976h2.839l-6.287-8.971-7.49,7.374h3.014v2.649H2739.5v2.993h3.014Z" transform="translate(-2737.241 635.924)" fill="#686367"/>
                <path id="Trazado_51" data-name="Trazado 51" d="M2742.511-560.365h7.925v-62.542h2.839v-2.069h-2.839v-1.976h2.839l-6.287-8.971-7.49,7.374h3.014v2.649H2739.5v2.993h3.014Z" transform="translate(-2736.334 637.286)" fill="#fefeff"/>
                <path id="Trazado_52" data-name="Trazado 52" d="M2643.21-544.627h5.784v-58.865l-2.35-3.62-3.434,3.62Z" transform="translate(-2624.296 619.732)" fill="#6a6569"/>
                <path id="Trazado_53" data-name="Trazado 53" d="M2667.889-603.01l3.166-3.85,2.06,3.85v58.483h-5.226Z" transform="translate(-2637.776 619.594)" fill="#6a6569"/>
                <path id="Trazado_54" data-name="Trazado 54" d="M2692.45-544.95h4.964v-59.07l-1.963-3.684-3,3.684Z" transform="translate(-2651.192 620.055)" fill="#6a6569"/>
                <path id="Trazado_55" data-name="Trazado 55" d="M2718.458-544.822h5.729v-59.943l-1.861-2.7-3.869,3.869Z" transform="translate(-2665.4 619.927)" fill="#6a6569"/>
                <path id="Trazado_44" data-name="Trazado 44" d="M2643.21-544.627h5.784v-58.865l-2.35-3.62-3.434,3.62Z" transform="translate(-2622.934 621.093)" fill="#fff"/>
                <path id="Trazado_45" data-name="Trazado 45" d="M2667.889-603.01l3.166-3.85,2.06,3.85v58.483h-5.226Z" transform="translate(-2636.415 620.955)" fill="#fff"/>
                <path id="Trazado_46" data-name="Trazado 46" d="M2692.45-544.95h4.964v-59.07l-1.963-3.684-3,3.684Z" transform="translate(-2649.831 621.417)" fill="#fff"/>
                <path id="Trazado_47" data-name="Trazado 47" d="M2718.458-544.822h5.729v-59.943l-1.861-2.7-3.869,3.869Z" transform="translate(-2664.038 621.289)" fill="#fff"/>
                <rect id="Rectángulo_23" data-name="Rectángulo 23" width="78" height="9" transform="translate(-0.21 64.277)" fill="#686868"/>
                <rect id="Rectángulo_22" data-name="Rectángulo 22" width="76" height="7" transform="translate(1.79 64.277)" fill="#fff"/>
                <rect id="Rectángulo_24" data-name="Rectángulo 24" width="78" height="9" transform="translate(-0.21 21.277)" fill="#686868"/>
                <rect id="Rectángulo_25" data-name="Rectángulo 25" width="76" height="8" transform="translate(1.79 21.277)" fill="#fff"/>
            </g>
            </g>
        </g>

      );

      case "bis":
      return (
        <g id="Grupo_27" data-name="Grupo 27" transform="translate(-384.245 -130)">
        <g id="Unión_13" data-name="Unión 13" transform="translate(1382.233 1)" fill="#da5468" strokeLinecap="square">
          <path d="M -974.89892578125 229.1711120605469 C -980.59326171875 229.1711120605469 -985.9539794921875 228.3470458984375 -989.9935913085938 226.8507080078125 C -994.1895141601562 225.2964782714844 -996.5003051757812 223.1670227050781 -996.5003051757812 220.8545989990234 C -996.5003051757812 220.5467987060547 -996.4002075195312 220.2731323242188 -996.1448974609375 219.9164276123047 L -996.5499267578125 219.8759155273438 L -995.3895874023438 219.1013641357422 L -974.73291015625 205.3125457763672 L -974.73291015625 169.9533081054688 C -974.73291015625 164.8968963623047 -972.5014038085938 160.1070861816406 -968.4494018554688 156.4662017822266 C -964.5414428710938 152.9547271728516 -959.33154296875 150.8610687255859 -953.7332153320312 150.5427398681641 L -953.7332153320312 150.5001983642578 L -953.2332153320312 150.5001983642578 L -937.732177734375 150.5001983642578 L -937.7276000976562 132.3115692138672 C -937.731201171875 132.2561645507812 -937.7330322265625 132.1996765136719 -937.7330322265625 132.1434020996094 C -937.7330322265625 130.6856079101562 -936.6112060546875 129.4996032714844 -935.2322998046875 129.4996032714844 C -934.4591674804688 129.4996032714844 -933.7456665039062 129.8687591552734 -933.2734985351562 130.5003967285156 L -911.23291015625 130.5003967285156 L -910.73291015625 130.5003967285156 L -910.73291015625 131.0003967285156 L -910.73291015625 142.0001983642578 L -910.73291015625 142.5001983642578 L -911.23291015625 142.5001983642578 L -932.7325439453125 142.5001983642578 L -932.7325439453125 150.5001983642578 L -899.29443359375 150.5001983642578 L -898.5357055664062 150.5001983642578 L -898.0357055664062 150.5001983642578 L -898.0357055664062 150.5297241210938 C -892.3695678710938 150.7976684570312 -887.087158203125 152.8700866699219 -883.1145629882812 156.3933258056641 C -878.9985961914062 160.043701171875 -876.7318115234375 164.8597106933594 -876.7318115234375 169.9542083740234 L -876.7318115234375 207 L -876.7318115234375 207.5 L -877.2318115234375 207.5 L -898.5357055664062 207.5 L -930.2328491210938 207.5 L -933.0795288085938 207.5 L -954.2897338867188 223.4113922119141 C -955.64013671875 225.0854339599609 -958.3021850585938 226.5189819335938 -961.9953002929688 227.5600280761719 C -965.7343139648438 228.6139984130859 -970.1962890625 229.1711120605469 -974.89892578125 229.1711120605469 Z" stroke="none"/>
          <path d="M -974.89892578125 228.6711120605469 C -965.3013305664062 228.6711120605469 -957.2012939453125 226.2987060546875 -954.6408081054688 223.0496978759766 L -933.2462158203125 207 L -933.2325439453125 207 L -930.2328491210938 207 L -898.5357055664062 207 L -877.2318115234375 207 L -877.2318115234375 169.9542083740234 C -877.2318115234375 159.7041015625 -886.7025146484375 151.3538970947266 -898.5357055664062 151.0110015869141 L -898.5357055664062 151.0001983642578 L -899.29443359375 151.0001983642578 L -933.2325439453125 151.0001983642578 L -933.2325439453125 142.0001983642578 L -911.23291015625 142.0001983642578 L -911.23291015625 131.0003967285156 L -933.54052734375 131.0003967285156 C -933.89501953125 130.3992004394531 -934.5204467773438 129.9996032714844 -935.2322998046875 129.9996032714844 C -936.3366088867188 129.9996032714844 -937.2330322265625 130.9598999023438 -937.2330322265625 132.1434020996094 C -937.2330322265625 132.1938018798828 -937.231201171875 132.2451171875 -937.2276000976562 132.2946014404297 L -937.2322998046875 151.0001983642578 L -953.2332153320312 151.0001983642578 L -953.2332153320312 151.0194396972656 C -964.9190063476562 151.4698791503906 -974.23291015625 159.7741851806641 -974.23291015625 169.9533081054688 L -974.23291015625 205.6941070556641 L -974.4039306640625 205.6941070556641 L -995.1119995117188 219.5172119140625 L -995.093994140625 219.5190124511719 C -995.2794189453125 219.662109375 -995.4288330078125 219.8070068359375 -995.53955078125 219.951904296875 C -995.9111938476562 220.4001007080078 -996.0003051757812 220.6260070800781 -996.0003051757812 220.8545989990234 C -996.0003051757812 225.1719055175781 -986.5530395507812 228.6711120605469 -974.89892578125 228.6711120605469 M -974.89892578125 229.6711120605469 C -980.6510620117188 229.6711120605469 -986.073486328125 228.8359832763672 -990.167236328125 227.3195953369141 C -992.2198486328125 226.5592651367188 -993.8461303710938 225.6609497070312 -995.0009155273438 224.6495666503906 C -996.32763671875 223.4876403808594 -997.0003051757812 222.2108306884766 -997.0003051757812 220.8545989990234 C -997.0003051757812 220.6722717285156 -996.9736938476562 220.5028839111328 -996.924560546875 220.3409423828125 L -997.9879150390625 220.234619140625 L -995.6671752929688 218.6855010986328 L -975.23291015625 205.0451354980469 L -975.23291015625 169.9533081054688 C -975.23291015625 164.7531433105469 -972.9425048828125 159.8312530517578 -968.7835693359375 156.0942840576172 C -964.9014282226562 152.60595703125 -959.7653198242188 150.4874420166016 -954.2332153320312 150.0745391845703 L -954.2332153320312 150.0001983642578 L -953.2332153320312 150.0001983642578 L -938.2320556640625 150.0001983642578 L -938.2276000976562 132.3271636962891 C -938.231201171875 132.2664184570312 -938.2330322265625 132.2047729492188 -938.2330322265625 132.1434020996094 C -938.2330322265625 130.409912109375 -936.8869018554688 128.9996032714844 -935.2322998046875 128.9996032714844 C -934.3843994140625 128.9996032714844 -933.597412109375 129.3652801513672 -933.0360107421875 130.0003967285156 L -911.23291015625 130.0003967285156 L -910.23291015625 130.0003967285156 L -910.23291015625 131.0003967285156 L -910.23291015625 142.0001983642578 L -910.23291015625 143.0001983642578 L -911.23291015625 143.0001983642578 L -932.2325439453125 143.0001983642578 L -932.2325439453125 150.0001983642578 L -899.29443359375 150.0001983642578 L -898.5357055664062 150.0001983642578 L -897.5357055664062 150.0001983642578 L -897.5357055664062 150.0570373535156 C -891.9364013671875 150.4212951660156 -886.72900390625 152.5194396972656 -882.7827758789062 156.0192565917969 C -878.558349609375 159.7658386230469 -876.2318115234375 164.7146911621094 -876.2318115234375 169.9542083740234 L -876.2318115234375 207 L -876.2318115234375 208 L -877.2318115234375 208 L -898.5357055664062 208 L -930.2328491210938 208 L -932.9127807617188 208 L -953.9409790039062 223.7747955322266 C -956.8521118164062 227.3063507080078 -965.238037109375 229.6711120605469 -974.89892578125 229.6711120605469 Z" stroke="none" fill="#b4d6c8"/>
        </g>
        <g id="Grupo_26" data-name="Grupo 26" transform="translate(-216.864 599.885)">
          <path id="Unión_10" data-name="Unión 10" d="M0,24,0,2.295q0-.075,0-.152A2.075,2.075,0,0,1,2,0,2.066,2.066,0,0,1,4,2.027H4v.085c0,.01,0,.02,0,.03s0,.027,0,.04L3.945,24Z" transform="translate(661.864 -468.885)" fill="#da5468"/>
          <rect id="Rectángulo_34" data-name="Rectángulo 34" width="23" height="11" transform="translate(664.864 -467.885)" fill="#da5468"/>
          <path id="Unión_8" data-name="Unión 8" d="M55.7,56H1V0H55.7V.011C67.53.354,77,8.7,77,18.954V56Z" transform="translate(644.864 -447.885)" fill="#da5468"/>
          <path id="Unión_9" data-name="Unión 9" d="M0,56V18.954C0,8.486,9.849,0,22,0S44,8.486,44,18.954V56Z" transform="translate(624.864 -447.885)" fill="#da5468"/>
          <path id="Unión_11" data-name="Unión 11" d="M0,22.977,23.136,5.622C25.7,2.373,33.8,0,43.394,0c11.654,0,21.1,3.5,21.1,7.817,0,.229-.089.454-.461.9a2.362,2.362,0,0,1-.445.433l.017,0L42.9,22.977Z" transform="translate(667.592 -370.214) rotate(180)" fill="#da5468"/>
          <path id="Unión_12" data-name="Unión 12" d="M0,53V17.938C0,8.031,8.73,0,19.5,0S39,8.031,39,17.938V53Z" transform="translate(626.864 -444.885)" fill="#b6374d"/>
          <rect id="Rectángulo_36" data-name="Rectángulo 36" width="1" height="20" transform="translate(664.864 -467.885)" fill="#be4256"/>
          <text id="BIS" transform="translate(668.864 -405.885)" fill="#ea94a8" fontSize="29" fontFamily="HelveticaNeue, Helvetica Neue"><tspan x="0" y="0">BIS</tspan></text>
        </g>
      </g>
      );

      case "landscaper":
        return (
            <g id="Grupo_60" data-name="Grupo 60" transform="translate(-1768.445 384.585)">
            <path id="Trazado_88" data-name="Trazado 88" d="M1587.866-581.035c-.04.8,10.16-10.284,44.563,0,1.135.339,2.253.655,3.464.975,32.243,8.555,51.1-2.361,53.992-6.692,2.994-4.479-11.465,10.979-41.871-2.439S1587.906-581.838,1587.866-581.035Z" transform="translate(180.58 279.569)" fill="#37c837"/>
            <g id="Grupo_60-2" data-name="Grupo 60" transform="translate(1822.703 -348.965)">
              <path id="path977-5-8" d="M-51.621,326.65h14.681" transform="translate(58.864 -282.566)" fill="none" stroke="#241f1c" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
              <path id="path979-8-6-6-8-5-7-2-3-7" d="M-48.962,342.577l-.1-28.038h3.27l.191,28.014Z" transform="translate(62.231 -298.493)" fill="#784421" stroke="#241f1c" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
              <ellipse id="path837-1-2-8-9-4" cx="10.531" cy="10.122" rx="10.531" ry="10.122" strokeWidth="2" transform="translate(0 15.232)" stroke="rgba(36,31,28,0.99)" strokeLinecap="round" strokeLinejoin="round" fill="#5fd35f"/>
              <ellipse id="ellipse9017" cx="16.102" cy="15.476" rx="16.102" ry="15.476" strokeWidth="2" transform="translate(4.338)" stroke="rgba(36,31,28,0.99)" strokeLinecap="round" strokeLinejoin="round" fill="#37c837"/>
            </g>
            <path id="path972-85-1-7-4-9" d="M-11.637,403.773s14.1,1.522,11.9-9.8" transform="translate(1826.582 -730.422)" fill="none" stroke="#241f1c" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.003"/>
            <g id="Grupo_61" data-name="Grupo 61" transform="translate(1780.546 -383.585)">
              <ellipse id="path4729" cx="12.436" cy="11.54" rx="12.436" ry="11.54" strokeWidth="2" transform="translate(8.678 28.287)" stroke="#241f1c" strokeLinecap="round" strokeLinejoin="round" fill="#2ca02c"/>
              <path id="path979-8-6-6-8-5-7" d="M-13.148,438.5l-.177-49.8h5.808l.34,49.76Z" transform="translate(40.783 -363.267)" fill="#784421" stroke="#241f1c" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
              <ellipse id="path4729-7" cx="16.669" cy="15.468" rx="16.669" ry="15.468" strokeWidth="2" transform="translate(0 7.208)" stroke="#241f1c" strokeLinecap="round" strokeLinejoin="round" fill="#37c837"/>
              <ellipse id="path4729-7-7" cx="16.669" cy="15.468" rx="16.669" ry="15.468" strokeWidth="2" transform="translate(19.222)" stroke="#241f1c" strokeLinecap="round" strokeLinejoin="round" fill="#5fd35f"/>
              <path id="path977-8-5-8-2-0" d="M-14.931,400.952H4.4" transform="translate(35.782 -325.117)" fill="none" stroke="#241f1c" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
              <ellipse id="path4729-7-7-7" cx="12.027" cy="11.16" rx="12.027" ry="11.16" strokeWidth="2" transform="translate(33.8 25.286)" stroke="#241f1c" strokeLinecap="round" strokeLinejoin="round" fill="#37c837"/>
            </g>
            <path id="path8203" d="M-11.637,403.773s14.1,1.522,11.9-9.8" transform="translate(1826.582 -730.422)" fill="none" stroke="#241f1c" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.003"/>
            <path id="path8755" d="M-11.637,403.773s14.1,1.522,11.9-9.8" transform="translate(1826.582 -730.422)" fill="none" stroke="#241f1c" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.003"/>
          </g>
        );

        case "pool-manufacturer":
            return (
                <g id="Grupo_15" data-name="Grupo 15" transform="translate(-220.995 474.035)">
                <path id="Trazado_7" data-name="Trazado 7" d="M229.692-348.653l-17.7-71.382L335.971-383,319-350.386Z" transform="translate(9 -54)" fill="#8dd1e4"/>
                <g id="Grupo_5" data-name="Grupo 5" transform="translate(270.891 -433.87)">
                  <ellipse id="Elipse_10" data-name="Elipse 10" cx="42" cy="15.5" rx="42" ry="15.5" transform="translate(0.109 5.87)" fill="#388caf"/>
                  <ellipse id="Elipse_11" data-name="Elipse 11" cx="38" cy="12" rx="38" ry="12" transform="translate(5.109 12.87)" fill="#5abce6"/>
                  <g id="Elipse_12" data-name="Elipse 12" transform="translate(0.109 5.87)" fill="none" stroke="#b4d6c8" strokeWidth="1">
                    <ellipse cx="42" cy="15.5" rx="42" ry="15.5" stroke="none"/>
                    <ellipse cx="42" cy="15.5" rx="41.5" ry="15" fill="none"/>
                  </g>
                  <path id="Trazado_4" data-name="Trazado 4" d="M249.153-368.49V-393.7" transform="translate(-229.967 398.834)" fill="none" stroke="#75c3e4" strokeWidth="1"/>
                  <line id="Línea_2" data-name="Línea 2" x2="12.042" transform="translate(19.783 22.683)" fill="none" stroke="#75c3e4" strokeWidth="1"/>
                  <line id="Línea_3" data-name="Línea 3" y1="24.083" transform="translate(31.824 5.481)" fill="none" stroke="#75c3e4" strokeWidth="1"/>
                  <line id="Línea_4" data-name="Línea 4" x2="12.042" transform="translate(19.783 15.802)" fill="none" stroke="#75c3e4" strokeWidth="1"/>
                  <line id="Línea_5" data-name="Línea 5" y1="8.601" transform="translate(11.182 5.481)" fill="none" stroke="#388caf" strokeWidth="1"/>
                  <line id="Línea_6" data-name="Línea 6" y1="8.601" transform="translate(23.223 3.761)" fill="none" stroke="#388caf" strokeWidth="1"/>
                  <path id="Trazado_5" data-name="Trazado 5" d="M244.508-392.144v.218l.133-1.686a4.23,4.23,0,0,1,3.819-2.074,3.9,3.9,0,0,1,4.039,3.761" transform="translate(-233.313 397.406)" fill="none" stroke="#75c3e4" strokeWidth="1"/>
                  <path id="Trazado_6" data-name="Trazado 6" d="M244.509-392.277v.34a2.355,2.355,0,0,1,.263-1.4,4.231,4.231,0,0,1,3.78-2.347c2.293,0,4.123,1.9,4.5,4.817.052.11.11,1.792.11,1.792" transform="translate(-221.286 395.686)" fill="none" stroke="#75c3e4" strokeWidth="1"/>
                </g>
                <g id="Grupo_14" data-name="Grupo 14" transform="translate(245.396 -452.057)">
                  <path id="Unión_2" data-name="Unión 2" d="M33.172,48.12H12.084c1.395-1.821,4.872-3.112,8.93-3.386L19.09,17.227c-2.85-.885-7.016,0-8.826,2.226,0,.034.006.068.01.1l-.058-.042-.061.079c-.005-.044-.01-.088-.015-.133-2.8-1.938-8.34-1.11-10.122,2C-.435,11.333,7.731,2.247,19.079.047L19.166,0l.107.033c11.146-.2,21.033,6.64,22.871,16.289-2.358-2.3-7.983-2.381-10.146.445l.016.147c-2.546-1.965-8.935-1.565-11.147,1.061l1.867,26.7c4.686.02,8.873,1.4,10.438,3.438l0,0ZM20.865,17.938c.007-.021,0-.032,0-.033Z" transform="translate(2.004 2.211)" fill="none" stroke="#b4d6c8" strokeWidth="1"/>
                  <rect id="Rectángulo_19" data-name="Rectángulo 19" width="1.72" height="30.964" transform="matrix(0.998, -0.07, 0.07, 0.998, 20.976, 17.745)" fill="#85afbe"/>
                  <path id="Sustracción_1" data-name="Sustracción 1" d="M21.091,3.44H0C1.577,1.381,5.816,0,10.546,0s8.965,1.381,10.543,3.437Z" transform="translate(14.088 46.891)" fill="#3289ad"/>
                  <g id="Grupo_12" data-name="Grupo 12" transform="matrix(0.995, -0.105, 0.105, 0.995, 0, 4.435)">
                    <path id="Trazado_28" data-name="Trazado 28" d="M21.328,0C9.747.95.611,9.157,0,19.315c2.131-2.954,7.874-3.159,10.4-.822.054-7.526,3.217-12.252,6-14.961A20.214,20.214,0,0,1,21.328,0Z" transform="translate(0 0.027)" fill="#388caf"/>
                    <path id="Trazado_29" data-name="Trazado 29" d="M5.166,3.466C7.924,6.167,10.79,10.392,11,17.994c2.44-2.6,8.042-1.933,10.151.6C20.324,8.781,11.153.926,0,0A20.9,20.9,0,0,1,5.166,3.466Z" transform="translate(21.288 0.036)" fill="#388caf"/>
                    <path id="Trazado_30" data-name="Trazado 30" d="M22.021,18.164C21.98,12.381,20.2,7.616,16.713,3.991A17.931,17.931,0,0,0,11.011,0a17.551,17.551,0,0,0-5.7,3.991C1.752,7.7-.04,12.585,0,18.545c2.417-2.607,8.366-2.756,10.714-.38-.028.912-.069.264,0,0,.064-.24.227-.24,0,0C13.1,15.667,19.659,15.911,22.021,18.164Z" transform="translate(10.276 0)" fill="#d9eff7"/>
                  </g>
                </g>
              </g>
            );

            case "real-state-agent":
                return (
                    <g id="Grupo_29" data-name="Grupo 29" transform="translate(-343.909 -130.901)">
                    <path id="Trazado_67" data-name="Trazado 67" d="M375.91-368.866l26.518-45.4,59.365-14.621-8.24-6.843,46.841-3.37-31.262,33.24v-12.258L400.572-381.9Z" transform="translate(-32 570)" fill="#a677ae"/>
                    <path id="Unión_16" data-name="Unión 16" d="M0,32.518V0H31V32.518C31,37.2,24.06,41,15.5,41S0,37.2,0,32.518Z" transform="translate(400.249 157)" fill="#9c66a2"/>
                    <path id="Trazado_75" data-name="Trazado 75" d="M384.526-390.479s10.818,11.248,29.795.488" transform="translate(16.722 568.842)" fill="none" stroke="#945b9c" strokeWidth="1"/>
                    <path id="Trazado_76" data-name="Trazado 76" d="M384.526-390.479s10.818,11.248,29.795.488" transform="translate(16.722 563.195)" fill="none" stroke="#945b9c" strokeWidth="1"/>
                    <path id="Trazado_77" data-name="Trazado 77" d="M384.526-390.479s10.818,11.248,29.795.488" transform="translate(16.722 556.136)" fill="none" stroke="#945b9c" strokeWidth="1"/>
                    <path id="Trazado_74" data-name="Trazado 74" d="M384.526-390.479s10.818,11.248,29.795.488" transform="translate(16.722 575.9)" fill="none" stroke="#945b9c" strokeWidth="1"/>
                    <path id="Unión_15" data-name="Unión 15" d="M0,21.429V0H31V21.429C31,26.163,24.06,30,15.5,30S0,26.163,0,21.429Z" transform="translate(378.249 173)" fill="#9c66a2"/>
                    <path id="Trazado_72" data-name="Trazado 72" d="M384.526-390.479s10.818,11.248,29.795.488" transform="translate(-5.865 580.135)" fill="none" stroke="#945b9c" strokeWidth="1"/>
                    <path id="Trazado_73" data-name="Trazado 73" d="M384.526-390.479s10.818,11.248,29.795.488" transform="translate(-5.865 573.077)" fill="none" stroke="#945b9c" strokeWidth="1"/>
                    <path id="Unión_14" data-name="Unión 14" d="M0,11.428V0H31V11.428C31,16.162,24.06,20,15.5,20S0,16.162,0,11.428Z" transform="translate(356.249 189)" fill="#9c66a2"/>
                    <ellipse id="Elipse_27" data-name="Elipse 27" cx="15.5" cy="8.5" rx="15.5" ry="8.5" transform="translate(356.249 181)" fill="#c28ebb"/>
                    <ellipse id="Elipse_29" data-name="Elipse 29" cx="15.5" cy="8.5" rx="15.5" ry="8.5" transform="translate(400.249 148)" fill="#c28ebb"/>
                    <ellipse id="Elipse_31" data-name="Elipse 31" cx="15.5" cy="8.5" rx="15.5" ry="8.5" transform="translate(378.249 165)" fill="#c28ebb"/>
                    <g id="iconfinder_Currency_dollar_381602" transform="translate(360.978 183.141)">
                      <g id="_x24_-sign_1_" transform="translate(0 0)">
                        <g id="_x24_-sign">
                          <path id="Top" d="M0,0H5.647V1.949L0,2.122Z" transform="translate(8.188)" fill="#34b67a"/>
                          <path id="Bottom" d="M0,1.049,5.647.9V3.756H0Z" transform="translate(8.188 6.41)" fill="#34b67a"/>
                          <path id="Shadow" d="M9.7,32.647v0Z" transform="translate(4.135 -20.505)" fill="#0ba55f"/>
                          <path id="S" d="M1.594,8.851c1.976.186,5.082.371,8.188.371,3.388,0,5.223-.265,5.223-.689,0-.371-1.553-.61-5.506-.848C3.994,7.314.465,6.757.465,5.856.465,4.8,5.123,4,12.888,4c3.812,0,6.494.133,8.329.318L19.523,5.432c-1.271-.133-3.67-.292-6.776-.292-3.247,0-4.8.292-4.8.583,0,.4,1.835.557,6.07.875,5.788.4,8.47.981,8.47,1.856,0,1.034-4.235,1.909-13.27,1.909-3.812,0-7.482-.186-9.317-.371Z" transform="translate(0.1 -2.455)" fill="#34b67a"/>
                        </g>
                      </g>
                    </g>
                    <g id="iconfinder_Currency_dollar_381602-2" data-name="iconfinder_Currency_dollar_381602" transform="translate(404.741 150.672)">
                      <g id="_x24_-sign_1_2" data-name="_x24_-sign_1_" transform="translate(0 0)">
                        <g id="_x24_-sign-2" data-name="_x24_-sign">
                          <path id="Top-2" data-name="Top" d="M0,0H5.647V1.949L0,2.122Z" transform="translate(8.188)" fill="#e2c4db"/>
                          <path id="Bottom-2" data-name="Bottom" d="M0,1.049,5.647.9V3.756H0Z" transform="translate(8.188 6.41)" fill="#e2c4db"/>
                          <path id="Shadow-2" data-name="Shadow" d="M9.7,32.647v0Z" transform="translate(4.135 -20.505)" fill="#e2c4db"/>
                          <path id="S-2" data-name="S" d="M1.594,8.851c1.976.186,5.082.371,8.188.371,3.388,0,5.223-.265,5.223-.689,0-.371-1.553-.61-5.506-.848C3.994,7.314.465,6.757.465,5.856.465,4.8,5.123,4,12.888,4c3.812,0,6.494.133,8.329.318L19.523,5.432c-1.271-.133-3.67-.292-6.776-.292-3.247,0-4.8.292-4.8.583,0,.4,1.835.557,6.07.875,5.788.4,8.47.981,8.47,1.856,0,1.034-4.235,1.909-13.27,1.909-3.812,0-7.482-.186-9.317-.371Z" transform="translate(0.1 -2.455)" fill="#e2c4db"/>
                        </g>
                      </g>
                    </g>
                    <g id="iconfinder_Currency_dollar_381602-3" data-name="iconfinder_Currency_dollar_381602" transform="translate(360.978 183.141)">
                      <g id="_x24_-sign_1_3" data-name="_x24_-sign_1_" transform="translate(0 0)">
                        <g id="_x24_-sign-3" data-name="_x24_-sign">
                          <path id="Top-3" data-name="Top" d="M0,0H5.647V1.949L0,2.122Z" transform="translate(8.188)" fill="#e2c4db"/>
                          <path id="Bottom-3" data-name="Bottom" d="M0,1.049,5.647.9V3.756H0Z" transform="translate(8.188 6.41)" fill="#e2c4db"/>
                          <path id="Shadow-3" data-name="Shadow" d="M9.7,32.647v0Z" transform="translate(4.135 -20.505)" fill="#e2c4db"/>
                          <path id="S-3" data-name="S" d="M1.594,8.851c1.976.186,5.082.371,8.188.371,3.388,0,5.223-.265,5.223-.689,0-.371-1.553-.61-5.506-.848C3.994,7.314.465,6.757.465,5.856.465,4.8,5.123,4,12.888,4c3.812,0,6.494.133,8.329.318L19.523,5.432c-1.271-.133-3.67-.292-6.776-.292-3.247,0-4.8.292-4.8.583,0,.4,1.835.557,6.07.875,5.788.4,8.47.981,8.47,1.856,0,1.034-4.235,1.909-13.27,1.909-3.812,0-7.482-.186-9.317-.371Z" transform="translate(0.1 -2.455)" fill="#e2c4db"/>
                        </g>
                      </g>
                    </g>
                    <g id="iconfinder_Currency_dollar_381602-4" data-name="iconfinder_Currency_dollar_381602" transform="translate(382.153 169.024)">
                      <g id="_x24_-sign_1_4" data-name="_x24_-sign_1_" transform="translate(0 0)">
                        <g id="_x24_-sign-4" data-name="_x24_-sign">
                          <path id="Top-4" data-name="Top" d="M0,0H5.647V1.949L0,2.122Z" transform="translate(8.188)" fill="#e2c4db"/>
                          <path id="Bottom-4" data-name="Bottom" d="M0,1.049,5.647.9V3.756H0Z" transform="translate(8.188 6.41)" fill="#e2c4db"/>
                          <path id="Shadow-4" data-name="Shadow" d="M9.7,32.647v0Z" transform="translate(4.135 -20.505)" fill="#e2c4db"/>
                          <path id="S-4" data-name="S" d="M1.594,8.851c1.976.186,5.082.371,8.188.371,3.388,0,5.223-.265,5.223-.689,0-.371-1.553-.61-5.506-.848C3.994,7.314.465,6.757.465,5.856.465,4.8,5.123,4,12.888,4c3.812,0,6.494.133,8.329.318L19.523,5.432c-1.271-.133-3.67-.292-6.776-.292-3.247,0-4.8.292-4.8.583,0,.4,1.835.557,6.07.875,5.788.4,8.47.981,8.47,1.856,0,1.034-4.235,1.909-13.27,1.909-3.812,0-7.482-.186-9.317-.371Z" transform="translate(0.1 -2.455)" fill="#e2c4db"/>
                        </g>
                      </g>
                    </g>
                    <path id="Trazado_71" data-name="Trazado 71" d="M384.526-390.479s10.818,11.248,29.795.488" transform="translate(-27.041 587.194)" fill="none" stroke="#945b9c" strokeWidth="1"/>
                  </g>
                );

                case "temp-agency":
                    return (
                        <g id="Grupo_11" data-name="Grupo 11" transform="translate(-271 -424)">
                        <path id="Trazado_8" data-name="Trazado 8" d="M351.958-320.739l-53.618-54.443,53.618-52.477,55.829,54.57Z" transform="translate(-27.339 851.659)" fill="#f2986e"/>
                        <path id="Trazado_9" data-name="Trazado 9" d="M6.453,0h8.524L2.819,66.536H-5.7Z" transform="translate(295.791 450.978)" fill="#ec7130"/>
                        <path id="Trazado_10" data-name="Trazado 10" d="M2.815,0H-5.7L6.447,66.536h8.52Z" transform="translate(346.309 450.978)" fill="#ec7130"/>
                        <rect id="Rectángulo_16" data-name="Rectángulo 16" width="81" height="11" transform="translate(284.661 478.659)" fill="#fac66a"/>
                        <path id="Trazado_11" data-name="Trazado 11" d="M305.5-390.686h8.124l6.871-10.976H305.5Z" transform="translate(-20.842 880.345)" fill="#ec7130"/>
                        <path id="Trazado_12" data-name="Trazado 12" d="M336.242-390.494h13.884V-401.47h-8.1Z" transform="translate(15.534 880.153)" fill="#eb7132"/>
                        <path id="Trazado_14" data-name="Trazado 14" d="M314.36-390.512h10.281l6.454-10.976H320.632Z" transform="translate(14.224 880.171)" fill="#ec7130"/>
                        <path id="Trazado_19" data-name="Trazado 19" d="M314.36-390.512h10.281l6.454-10.976H320.632Z" transform="translate(-9.218 880.171)" fill="#ec7130"/>
                        <g id="Grupo_10" data-name="Grupo 10" transform="translate(-1.339 -0.341)">
                          <rect id="Rectángulo_17" data-name="Rectángulo 17" width="81" height="11" transform="translate(286 459)" fill="#fac66a"/>
                          <path id="Trazado_20" data-name="Trazado 20" d="M305.5-390.686h8.124l6.871-10.976H305.5Z" transform="translate(-19.503 860.686)" fill="#ec7130"/>
                          <path id="Trazado_21" data-name="Trazado 21" d="M336.242-390.494h13.884V-401.47h-8.1Z" transform="translate(16.873 860.494)" fill="#eb7132"/>
                          <path id="Trazado_22" data-name="Trazado 22" d="M314.36-390.512h10.281l6.454-10.976H320.632Z" transform="translate(15.563 860.512)" fill="#ec7130"/>
                          <path id="Trazado_23" data-name="Trazado 23" d="M314.36-390.512h10.281l6.454-10.976H320.632Z" transform="translate(-7.879 860.512)" fill="#ec7130"/>
                        </g>
                      </g>
              
                    );


                    case "door":
                      return (
                        <path id="Trazado_87" data-name="Trazado 87" d="M112.136,102.385H97.509V4.875A4.606,4.606,0,0,0,92.634,0H24.377A4.606,4.606,0,0,0,19.5,4.875v97.509H4.875A4.606,4.606,0,0,0,0,107.26v9.751H117.011V107.26A4.606,4.606,0,0,0,112.136,102.385ZM29.253,9.751H87.758v92.634H29.253ZM4.875,112.135V107.26h107.26v4.875Z"/>

                        );

                        case "next":
                          return (
                            <g id="Grupo_66" data-name="Grupo 66" transform="translate(-646 -592)">
                              <path id="iconfinder_arrow-right-01_186409" d="M29.625,18.113,16.448,4.937a3.116,3.116,0,0,0-4.392,0l-1.1,1.1a3.114,3.114,0,0,0,0,4.39L21.011,20.483,10.956,30.538a3.114,3.114,0,0,0,0,4.39l1.1,1.1a3.114,3.114,0,0,0,4.392,0L29.624,22.85a3.08,3.08,0,0,0,.889-2.368A3.078,3.078,0,0,0,29.625,18.113Z" transform="translate(651.95 597.969)" fill="#515151"/>
                              <g id="Elipse_39" data-name="Elipse 39" transform="translate(646 592)" fill="none" stroke="#515151" strokeWidth="1">
                                <circle cx="26" cy="26" r="26" stroke="none"/>
                                <circle cx="26" cy="26" r="25.5" fill="none"/>
                              </g>
                            </g>
                          );

                  case "end":
                  return (
                    <g id="Grupo_67" data-name="Grupo 67" transform="translate(-707 -592)">
                    <g id="Elipse_42" data-name="Elipse 42" transform="translate(707 592)" fill="none" stroke="#515151" strokeWidth="1">
                      <circle cx="26" cy="26" r="26" stroke="none"/>
                      <circle cx="26" cy="26" r="25.5" fill="none"/>
                    </g>
                    <g id="Grupo_62" data-name="Grupo 62" transform="translate(-9)">
                      <path id="iconfinder_arrow-right-01_186409" d="M29.625,18.113,16.448,4.937a3.116,3.116,0,0,0-4.392,0l-1.1,1.1a3.114,3.114,0,0,0,0,4.39L21.011,20.483,10.956,30.538a3.114,3.114,0,0,0,0,4.39l1.1,1.1a3.114,3.114,0,0,0,4.392,0L29.624,22.85a3.08,3.08,0,0,0,.889-2.368A3.078,3.078,0,0,0,29.625,18.113Z" transform="translate(713.949 597.969)" fill="#515151"/>
                      <path id="iconfinder_arrow-right-01_186409-2" data-name="iconfinder_arrow-right-01_186409" d="M29.625,18.113,16.448,4.937a3.116,3.116,0,0,0-4.392,0l-1.1,1.1a3.114,3.114,0,0,0,0,4.39L21.011,20.483,10.956,30.538a3.114,3.114,0,0,0,0,4.39l1.1,1.1a3.114,3.114,0,0,0,4.392,0L29.624,22.85a3.08,3.08,0,0,0,.889-2.368A3.078,3.078,0,0,0,29.625,18.113Z" transform="translate(729.949 597.969)" fill="#515151"/>
                    </g>
                  </g>
                  );

                  case "previous":
                  return (
                    <g id="Grupo_63" data-name="Grupo 63" transform="translate(-291 -592)">
                        <path id="iconfinder_arrow-right-01_186409" d="M29.625,18.113,16.448,4.937a3.116,3.116,0,0,0-4.392,0l-1.1,1.1a3.114,3.114,0,0,0,0,4.39L21.011,20.483,10.956,30.538a3.114,3.114,0,0,0,0,4.39l1.1,1.1a3.114,3.114,0,0,0,4.392,0L29.624,22.85a3.08,3.08,0,0,0,.889-2.368A3.078,3.078,0,0,0,29.625,18.113Z" transform="translate(337.519 638.934) rotate(180)" fill="#515151"/>
                        <g id="Elipse_41" data-name="Elipse 41" transform="translate(343 644) rotate(180)" fill="none" stroke="#515151" strokeWidth="1">
                          <circle cx="26" cy="26" r="26" stroke="none"/>
                          <circle cx="26" cy="26" r="25.5" fill="none"/>
                        </g>
                      </g>
                  );

                  case "refresh":
                  return (
                    <g id="Grupo_64" data-name="Grupo 64" transform="translate(-457 -596)">
                    <g id="iconfinder_sync-01_186384" transform="translate(463.819 603.061)">
                      <path id="Trazado_89" data-name="Trazado 89" d="M31.492,4.391s-1.7,1.661-2.881,2.827A15.357,15.357,0,0,0,4.2,20.294H9.333a10.233,10.233,0,0,1,15.567-9.4c-1.338,1.326-2.884,2.875-2.884,2.875-1.08,1.3.134,2.045.75,2.026H32.783a.7.7,0,0,0,.694-.695V5.167A1.1,1.1,0,0,0,31.492,4.391Z" transform="translate(0 0)" fill="#515151"/>
                      <path id="Trazado_90" data-name="Trazado 90" d="M6.995,31.231S8.7,29.57,9.876,28.4A15.357,15.357,0,0,0,34.293,15.328H29.154a10.232,10.232,0,0,1-15.567,9.4c1.338-1.326,2.884-2.875,2.884-2.875,1.08-1.3-.134-2.045-.75-2.026l-7.224,0c-.381,0-.694,0-.694,0h-2.1a.7.7,0,0,0-.695.695v9.931A1.1,1.1,0,0,0,6.995,31.231Z" transform="translate(0.236 3.239)" fill="#515151"/>
                    </g>
                    <g id="Elipse_40" data-name="Elipse 40" transform="translate(457 596)" fill="none" stroke="#707070" strokeWidth="1">
                      <circle cx="26" cy="26" r="26" stroke="none"/>
                      <circle cx="26" cy="26" r="25.5" fill="none"/>
                    </g>
                  </g>
                  );

                  case "not_refresh":
                  return (
                    <g id="Grupo_65" data-name="Grupo 65" transform="translate(-521 -596)">
                    <g id="iconfinder_sync-01_186384" transform="translate(527.819 603.061)">
                      <path id="Trazado_89" data-name="Trazado 89" d="M31.492,4.391s-1.7,1.661-2.881,2.827A15.357,15.357,0,0,0,4.2,20.294H9.333a10.233,10.233,0,0,1,15.567-9.4c-1.338,1.326-2.884,2.875-2.884,2.875-1.08,1.3.134,2.045.75,2.026H32.783a.7.7,0,0,0,.694-.695V5.167A1.1,1.1,0,0,0,31.492,4.391Z" transform="translate(0 0)" fill="#515151"/>
                      <path id="Trazado_90" data-name="Trazado 90" d="M6.995,31.231S8.7,29.57,9.876,28.4A15.357,15.357,0,0,0,34.293,15.328H29.154a10.232,10.232,0,0,1-15.567,9.4c1.338-1.326,2.884-2.875,2.884-2.875,1.08-1.3-.134-2.045-.75-2.026l-7.224,0c-.381,0-.694,0-.694,0h-2.1a.7.7,0,0,0-.695.695v9.931A1.1,1.1,0,0,0,6.995,31.231Z" transform="translate(0.236 3.239)" fill="#515151"/>
                    </g>
                    <g id="Trazado_92" data-name="Trazado 92" transform="translate(521 596)" fill="none">
                      <path d="M26,0A26,26,0,1,1,0,26,26,26,0,0,1,26,0Z" stroke="none"/>
                      <path d="M 26 1 C 22.62458038330078 1 19.35065841674805 1.660858154296875 16.26918029785156 2.964210510253906 C 13.29232025146484 4.223320007324219 10.61861038208008 6.026050567626953 8.322330474853516 8.322330474853516 C 6.026050567626953 10.61861038208008 4.223320007324219 13.29232025146484 2.964210510253906 16.26918029785156 C 1.660858154296875 19.35065841674805 1 22.62458038330078 1 26 C 1 29.37541961669922 1.660858154296875 32.64933776855469 2.964210510253906 35.73081970214844 C 4.223320007324219 38.70767974853516 6.026050567626953 41.38138961791992 8.322330474853516 43.67766952514648 C 10.61861038208008 45.97394943237305 13.29232025146484 47.77667999267578 16.26918029785156 49.03578948974609 C 19.35065841674805 50.33914184570312 22.62458038330078 51 26 51 C 29.37541961669922 51 32.64933776855469 50.33914184570312 35.73081970214844 49.03578948974609 C 38.70767974853516 47.77667999267578 41.38138961791992 45.97394943237305 43.67766952514648 43.67766952514648 C 45.97394943237305 41.38138961791992 47.77667999267578 38.70767974853516 49.03578948974609 35.73081970214844 C 50.33914184570312 32.64933776855469 51 29.37541961669922 51 26 C 51 22.62458038330078 50.33914184570312 19.35065841674805 49.03578948974609 16.26918029785156 C 47.77667999267578 13.29232025146484 45.97394943237305 10.61861038208008 43.67766952514648 8.322330474853516 C 41.38138961791992 6.026050567626953 38.70767974853516 4.223320007324219 35.73081970214844 2.964210510253906 C 32.64933776855469 1.660858154296875 29.37541961669922 1 26 1 M 26 0 C 40.35939788818359 0 52 11.64059829711914 52 26 C 52 40.35939788818359 40.35939788818359 52 26 52 C 11.64059829711914 52 0 40.35939788818359 0 26 C 0 11.64059829711914 11.64059829711914 0 26 0 Z" stroke="none" fill="#515151"/>
                    </g>
                    <path id="Trazado_91" data-name="Trazado 91" d="M0,0,30.381,40.773" transform="translate(532.531 601.212)" fill="none" stroke="#515151" strokeWidth="5"/>
                  </g>
                  );


                  case "city-plan-background":
                    return (
                      <g id="Grupo_238" data-name="Grupo 238" transform="translate(-3644 370)">
                      <g id="Sustracción_7" data-name="Sustracción 7" transform="translate(6780 -523)" fill="#fff">
                        <path d="M-3081,350h-55V153h55a18.882,18.882,0,0,1,7.4,1.493,18.941,18.941,0,0,1,6.039,4.072,18.936,18.936,0,0,1,4.072,6.039A18.882,18.882,0,0,1-3062,172V331a18.883,18.883,0,0,1-1.493,7.4,18.935,18.935,0,0,1-4.072,6.039,18.941,18.941,0,0,1-6.039,4.072A18.882,18.882,0,0,1-3081,350Z" stroke="none"/>
                        <path d="M -3080.999755859375 349.0001525878906 C -3078.5693359375 349.0001525878906 -3076.212158203125 348.5243530273438 -3073.99365234375 347.5860290527344 C -3071.850341796875 346.6792907714844 -3069.925048828125 345.3812866210938 -3068.271728515625 343.7279968261719 C -3066.6181640625 342.0743103027344 -3065.3203125 340.1492309570312 -3064.413818359375 338.0062561035156 C -3063.4755859375 335.787353515625 -3062.999755859375 333.43017578125 -3062.999755859375 331.0002136230469 L -3062.999755859375 171.9999237060547 C -3062.999755859375 169.5699462890625 -3063.4755859375 167.2127838134766 -3064.413818359375 164.9939270019531 C -3065.320068359375 162.8509979248047 -3066.6181640625 160.9259338378906 -3068.271728515625 159.2721710205078 C -3069.925048828125 157.6188812255859 -3071.850341796875 156.3208465576172 -3073.99365234375 155.4141540527344 C -3076.212158203125 154.4757995605469 -3078.5693359375 154 -3080.999755859375 154 L -3134.999755859375 154.0000305175781 L -3134.999755859375 349.0001525878906 L -3080.999755859375 349.0001525878906 M -3080.999755859375 350.0001525878906 L -3135.999755859375 350.0001525878906 L -3135.999755859375 153.0000305175781 L -3080.999755859375 153 C -3078.434814453125 153 -3075.946533203125 153.5023803710938 -3073.60400390625 154.4931488037109 C -3071.341552734375 155.4502563476562 -3069.3095703125 156.8202514648438 -3067.564697265625 158.5650482177734 C -3065.81982421875 160.31005859375 -3064.44970703125 162.3419799804688 -3063.492919921875 164.6044311523438 C -3062.502197265625 166.9470062255859 -3061.999755859375 169.4351959228516 -3061.999755859375 171.9999237060547 L -3061.999755859375 331.0002136230469 C -3061.999755859375 333.56494140625 -3062.502197265625 336.0531311035156 -3063.492919921875 338.395751953125 C -3064.44970703125 340.658203125 -3065.81982421875 342.6901550292969 -3067.564697265625 344.4350891113281 C -3069.3095703125 346.1799011230469 -3071.341552734375 347.5498962402344 -3073.60400390625 348.5069885253906 C -3075.946533203125 349.4977722167969 -3078.434814453125 350.0001525878906 -3080.999755859375 350.0001525878906 Z" stroke="none" fill="rgba(0,0,0,0.9)"/>
                      </g>
                      <rect id="Rectángulo_130" data-name="Rectángulo 130" width="8" height="195" transform="translate(3644 -369)" fill="#fff"/>
                    </g>
);
case "city-plan-level-1--1":
return (
  <g id="Grupo_239" data-name="Grupo 239" transform="translate(-108 -84)">
    <g id="Grupo_208" data-name="Grupo 208">
      <rect id="Rectángulo_92" data-name="Rectángulo 92" width="53" height="180" transform="translate(108 84)" fill="none"/>
      <g id="Grupo_69" data-name="Grupo 69" transform="translate(102 51)">
        <text id="_6" data-name="6" transform="translate(31 93)" fontSize="16" fontFamily="HelveticaNeue, Helvetica Neue"><tspan x="-4.448" y="0">6</tspan></text>
      </g>
      <g id="Grupo_70" data-name="Grupo 70" transform="translate(102 100)">
        <text id="_6-2" data-name="6" transform="translate(31 93)" fontSize="16" fontFamily="HelveticaNeue, Helvetica Neue"><tspan x="-4.448" y="0">6</tspan></text>
      </g>
    </g>
    <path id="Trazado_93" data-name="Trazado 93" d="M4427.778,93.386h-2.529V68.17h36.327V93.386h-18.724v9.162h-15.075Z" transform="translate(-4309 57)" fill="none" stroke="#000" strokeWidth="1"/>
    <path id="Trazado_94" data-name="Trazado 94" d="M4427.778,93.386h-2.529V68.17h36.327V93.386h-18.724v9.162h-15.075Z" transform="translate(-4309 108)" fill="none" stroke="#000" strokeWidth="1"/>
  </g>
);
case "city-plan-level-1--2":
return (
  <g id="Grupo_209" data-name="Grupo 209" transform="translate(-227 -84)">
    <rect id="Rectángulo_94" data-name="Rectángulo 94" width="53" height="180" transform="translate(227 84)" fill="none"/>
    <g id="Grupo_78" data-name="Grupo 78" transform="translate(221 51)">
      <g id="Grupo_46" data-name="Grupo 46" transform="translate(14 76)">
        <g id="Unión_22" data-name="Unión 22" transform="translate(0 0)" fill="none">
          <path d="M2.312,35V25.87H0V0H37V25.87H18.5V35Z" stroke="none"/>
          <path d="M 17.49966049194336 34 L 17.49966049194336 25.86977005004883 L 17.49966049194336 24.86977005004883 L 18.49966049194336 24.86977005004883 L 36 24.86977005004883 L 36 1 L 1 1 L 1 24.86977005004883 L 2.312279939651489 24.86977005004883 L 3.312279939651489 24.86977005004883 L 3.312279939651489 25.86977005004883 L 3.312279939651489 34 L 17.49966049194336 34 M 18.49966049194336 35 L 2.312279939651489 35 L 2.312279939651489 25.86977005004883 L 0 25.86977005004883 L 0 0 L 37 0 L 37 25.86977005004883 L 18.49966049194336 25.86977005004883 L 18.49966049194336 35 Z" stroke="none"/>
        </g>
      </g>
      <text id="_4" data-name="4" transform="translate(31 93)" fontSize="16" fontFamily="HelveticaNeue, Helvetica Neue"><tspan x="-4.448" y="0">4</tspan></text>
    </g>
    <g id="Grupo_79" data-name="Grupo 79" transform="translate(221 100)">
      <g id="Grupo_46-2" data-name="Grupo 46" transform="translate(14 76)">
        <g id="Unión_22-2" data-name="Unión 22" transform="translate(0 0)" fill="none">
          <path d="M2.312,35V25.87H0V0H37V25.87H18.5V35Z" stroke="none"/>
          <path d="M 17.49966049194336 34 L 17.49966049194336 25.86977005004883 L 17.49966049194336 24.86977005004883 L 18.49966049194336 24.86977005004883 L 36 24.86977005004883 L 36 1 L 1 1 L 1 24.86977005004883 L 2.312279939651489 24.86977005004883 L 3.312279939651489 24.86977005004883 L 3.312279939651489 25.86977005004883 L 3.312279939651489 34 L 17.49966049194336 34 M 18.49966049194336 35 L 2.312279939651489 35 L 2.312279939651489 25.86977005004883 L 0 25.86977005004883 L 0 0 L 37 0 L 37 25.86977005004883 L 18.49966049194336 25.86977005004883 L 18.49966049194336 35 Z" stroke="none"/>
        </g>
      </g>
      <text id="_4-2" data-name="4" transform="translate(31 93)" fontSize="16" fontFamily="HelveticaNeue, Helvetica Neue"><tspan x="-4.448" y="0">4</tspan></text>
    </g>
  </g>
);
case "city-plan-level-1--3":
return (
<g id="Grupo_210" data-name="Grupo 210" transform="translate(-287 -84)">
  <rect id="Rectángulo_95" data-name="Rectángulo 95" width="53" height="180" transform="translate(287 84)" fill="none"/>
  <g id="Repetir_cuadrícula_2" data-name="Repetir cuadrícula 2" transform="translate(303 89)" clipPath="url(#clip-path)">
    <g id="Grupo_81" data-name="Grupo 81" transform="translate(0.078 0.199)">
      <g id="Grupo_46" data-name="Grupo 46" transform="translate(0 0)">
        <g id="Unión_22" data-name="Unión 22" transform="translate(-0.078 -0.199)" fill="none">
          <path d="M1.375,21V15.522H0V0H22V15.522H11V21Z" stroke="none"/>
          <path d="M 9.999799728393555 20 L 9.999799728393555 15.52186012268066 L 9.999799728393555 14.52186012268066 L 10.99979972839355 14.52186012268066 L 21 14.52186012268066 L 21 1 L 1 1 L 1 14.52186012268066 L 1.3748699426651 14.52186012268066 L 2.37487006187439 14.52186012268066 L 2.37487006187439 15.52186012268066 L 2.37487006187439 20 L 9.999799728393555 20 M 10.99979972839355 21 L 1.3748699426651 21 L 1.3748699426651 15.52186012268066 L -1.77635683940025e-15 15.52186012268066 L -1.77635683940025e-15 0 L 22 0 L 22 15.52186012268066 L 10.99979972839355 15.52186012268066 L 10.99979972839355 21 Z" stroke="none"/>
        </g>
      </g>
      <text id="_1" data-name="1" transform="translate(10.922 10.801)" fontSize="7" fontFamily="HelveticaNeue, Helvetica Neue"><tspan x="-1.946" y="0">1</tspan></text>
    </g>
    <g id="Grupo_81-2" data-name="Grupo 81" transform="translate(0.078 30.199)">
      <g id="Grupo_46-2" data-name="Grupo 46" transform="translate(0 0)">
        <g id="Unión_22-2" data-name="Unión 22" transform="translate(-0.078 -0.199)" fill="none">
          <path d="M1.375,21V15.522H0V0H22V15.522H11V21Z" stroke="none"/>
          <path d="M 9.999799728393555 20 L 9.999799728393555 15.52186012268066 L 9.999799728393555 14.52186012268066 L 10.99979972839355 14.52186012268066 L 21 14.52186012268066 L 21 1 L 1 1 L 1 14.52186012268066 L 1.3748699426651 14.52186012268066 L 2.37487006187439 14.52186012268066 L 2.37487006187439 15.52186012268066 L 2.37487006187439 20 L 9.999799728393555 20 M 10.99979972839355 21 L 1.3748699426651 21 L 1.3748699426651 15.52186012268066 L -1.77635683940025e-15 15.52186012268066 L -1.77635683940025e-15 0 L 22 0 L 22 15.52186012268066 L 10.99979972839355 15.52186012268066 L 10.99979972839355 21 Z" stroke="none"/>
        </g>
      </g>
      <text id="_1-2" data-name="1" transform="translate(10.922 10.801)" fontSize="7" fontFamily="HelveticaNeue, Helvetica Neue"><tspan x="-1.946" y="0">1</tspan></text>
    </g>
    <g id="Grupo_81-3" data-name="Grupo 81" transform="translate(0.078 60.199)">
      <g id="Grupo_46-3" data-name="Grupo 46" transform="translate(0 0)">
        <g id="Unión_22-3" data-name="Unión 22" transform="translate(-0.078 -0.199)" fill="none">
          <path d="M1.375,21V15.522H0V0H22V15.522H11V21Z" stroke="none"/>
          <path d="M 9.999799728393555 20 L 9.999799728393555 15.52186012268066 L 9.999799728393555 14.52186012268066 L 10.99979972839355 14.52186012268066 L 21 14.52186012268066 L 21 1 L 1 1 L 1 14.52186012268066 L 1.3748699426651 14.52186012268066 L 2.37487006187439 14.52186012268066 L 2.37487006187439 15.52186012268066 L 2.37487006187439 20 L 9.999799728393555 20 M 10.99979972839355 21 L 1.3748699426651 21 L 1.3748699426651 15.52186012268066 L -1.77635683940025e-15 15.52186012268066 L -1.77635683940025e-15 0 L 22 0 L 22 15.52186012268066 L 10.99979972839355 15.52186012268066 L 10.99979972839355 21 Z" stroke="none"/>
        </g>
      </g>
      <text id="_1-3" data-name="1" transform="translate(10.922 10.801)" fontSize="7" fontFamily="HelveticaNeue, Helvetica Neue"><tspan x="-1.946" y="0">1</tspan></text>
    </g>
    <g id="Grupo_81-4" data-name="Grupo 81" transform="translate(0.078 90.199)">
      <g id="Grupo_46-4" data-name="Grupo 46" transform="translate(0 0)">
        <g id="Unión_22-4" data-name="Unión 22" transform="translate(-0.078 -0.199)" fill="none">
          <path d="M1.375,21V15.522H0V0H22V15.522H11V21Z" stroke="none"/>
          <path d="M 9.999799728393555 20 L 9.999799728393555 15.52186012268066 L 9.999799728393555 14.52186012268066 L 10.99979972839355 14.52186012268066 L 21 14.52186012268066 L 21 1 L 1 1 L 1 14.52186012268066 L 1.3748699426651 14.52186012268066 L 2.37487006187439 14.52186012268066 L 2.37487006187439 15.52186012268066 L 2.37487006187439 20 L 9.999799728393555 20 M 10.99979972839355 21 L 1.3748699426651 21 L 1.3748699426651 15.52186012268066 L -1.77635683940025e-15 15.52186012268066 L -1.77635683940025e-15 0 L 22 0 L 22 15.52186012268066 L 10.99979972839355 15.52186012268066 L 10.99979972839355 21 Z" stroke="none"/>
        </g>
      </g>
      <text id="_1-4" data-name="1" transform="translate(10.922 10.801)" fontSize="7" fontFamily="HelveticaNeue, Helvetica Neue"><tspan x="-1.946" y="0">1</tspan></text>
    </g>
    <g id="Grupo_81-5" data-name="Grupo 81" transform="translate(0.078 120.199)">
      <g id="Grupo_46-5" data-name="Grupo 46" transform="translate(0 0)">
        <g id="Unión_22-5" data-name="Unión 22" transform="translate(-0.078 -0.199)" fill="none">
          <path d="M1.375,21V15.522H0V0H22V15.522H11V21Z" stroke="none"/>
          <path d="M 9.999799728393555 20 L 9.999799728393555 15.52186012268066 L 9.999799728393555 14.52186012268066 L 10.99979972839355 14.52186012268066 L 21 14.52186012268066 L 21 1 L 1 1 L 1 14.52186012268066 L 1.3748699426651 14.52186012268066 L 2.37487006187439 14.52186012268066 L 2.37487006187439 15.52186012268066 L 2.37487006187439 20 L 9.999799728393555 20 M 10.99979972839355 21 L 1.3748699426651 21 L 1.3748699426651 15.52186012268066 L -1.77635683940025e-15 15.52186012268066 L -1.77635683940025e-15 0 L 22 0 L 22 15.52186012268066 L 10.99979972839355 15.52186012268066 L 10.99979972839355 21 Z" stroke="none"/>
        </g>
      </g>
      <text id="_1-5" data-name="1" transform="translate(10.922 10.801)" fontSize="7" fontFamily="HelveticaNeue, Helvetica Neue"><tspan x="-1.946" y="0">1</tspan></text>
    </g>
    <g id="Grupo_81-6" data-name="Grupo 81" transform="translate(0.078 150.199)">
      <g id="Grupo_46-6" data-name="Grupo 46" transform="translate(0 0)">
        <g id="Unión_22-6" data-name="Unión 22" transform="translate(-0.078 -0.199)" fill="none">
          <path d="M1.375,21V15.522H0V0H22V15.522H11V21Z" stroke="none"/>
          <path d="M 9.999799728393555 20 L 9.999799728393555 15.52186012268066 L 9.999799728393555 14.52186012268066 L 10.99979972839355 14.52186012268066 L 21 14.52186012268066 L 21 1 L 1 1 L 1 14.52186012268066 L 1.3748699426651 14.52186012268066 L 2.37487006187439 14.52186012268066 L 2.37487006187439 15.52186012268066 L 2.37487006187439 20 L 9.999799728393555 20 M 10.99979972839355 21 L 1.3748699426651 21 L 1.3748699426651 15.52186012268066 L -1.77635683940025e-15 15.52186012268066 L -1.77635683940025e-15 0 L 22 0 L 22 15.52186012268066 L 10.99979972839355 15.52186012268066 L 10.99979972839355 21 Z" stroke="none"/>
        </g>
      </g>
      <text id="_1-6" data-name="1" transform="translate(10.922 10.801)" fontSize="7" fontFamily="HelveticaNeue, Helvetica Neue"><tspan x="-1.946" y="0">1</tspan></text>
    </g>
  </g>
</g>
);
case "city-plan-level-1--4":
return (
<g id="Grupo_211" data-name="Grupo 211" transform="translate(-349 -84)">
    <rect id="Rectángulo_96" data-name="Rectángulo 96" width="53" height="180" transform="translate(349 84)" fill="none"/>
    <g id="Grupo_88" data-name="Grupo 88" transform="translate(0 -19)">
      <g id="Grupo_84" data-name="Grupo 84" transform="translate(343 51)">
        <g id="Grupo_46" data-name="Grupo 46" transform="translate(14 76)">
          <g id="Unión_22" data-name="Unión 22" transform="translate(0 0)" fill="none">
            <path d="M2.312,35V25.87H0V0H37V25.87H18.5V35Z" stroke="none"/>
            <path d="M 17.49966049194336 34 L 17.49966049194336 25.86977005004883 L 17.49966049194336 24.86977005004883 L 18.49966049194336 24.86977005004883 L 36 24.86977005004883 L 36 1 L 1 1 L 1 24.86977005004883 L 2.312279939651489 24.86977005004883 L 3.312279939651489 24.86977005004883 L 3.312279939651489 25.86977005004883 L 3.312279939651489 34 L 17.49966049194336 34 M 18.49966049194336 35 L 2.312279939651489 35 L 2.312279939651489 25.86977005004883 L 0 25.86977005004883 L 0 0 L 37 0 L 37 25.86977005004883 L 18.49966049194336 25.86977005004883 L 18.49966049194336 35 Z" stroke="none"/>
          </g>
        </g>
        <text id="_6" data-name="6" transform="translate(31 93)" fontSize="16" fontFamily="HelveticaNeue, Helvetica Neue"><tspan x="-4.448" y="0">6</tspan></text>
      </g>
      <g id="Grupo_85" data-name="Grupo 85" transform="translate(343 100)">
        <g id="Grupo_46-2" data-name="Grupo 46" transform="translate(14 76)">
          <g id="Unión_22-2" data-name="Unión 22" transform="translate(0 0)" fill="none">
            <path d="M2.312,35V25.87H0V0H37V25.87H18.5V35Z" stroke="none"/>
            <path d="M 17.49966049194336 34 L 17.49966049194336 25.86977005004883 L 17.49966049194336 24.86977005004883 L 18.49966049194336 24.86977005004883 L 36 24.86977005004883 L 36 1 L 1 1 L 1 24.86977005004883 L 2.312279939651489 24.86977005004883 L 3.312279939651489 24.86977005004883 L 3.312279939651489 25.86977005004883 L 3.312279939651489 34 L 17.49966049194336 34 M 18.49966049194336 35 L 2.312279939651489 35 L 2.312279939651489 25.86977005004883 L 0 25.86977005004883 L 0 0 L 37 0 L 37 25.86977005004883 L 18.49966049194336 25.86977005004883 L 18.49966049194336 35 Z" stroke="none"/>
          </g>
        </g>
        <text id="_6-2" data-name="6" transform="translate(31 93)" fontSize="16" fontFamily="HelveticaNeue, Helvetica Neue"><tspan x="-4.448" y="0">6</tspan></text>
      </g>
      <g id="Grupo_87" data-name="Grupo 87" transform="translate(343 149)">
        <g id="Grupo_46-3" data-name="Grupo 46" transform="translate(14 76)">
          <g id="Unión_22-3" data-name="Unión 22" transform="translate(0 0)" fill="none">
            <path d="M2.312,35V25.87H0V0H37V25.87H18.5V35Z" stroke="none"/>
            <path d="M 17.49966049194336 34 L 17.49966049194336 25.86977005004883 L 17.49966049194336 24.86977005004883 L 18.49966049194336 24.86977005004883 L 36 24.86977005004883 L 36 1 L 1 1 L 1 24.86977005004883 L 2.312279939651489 24.86977005004883 L 3.312279939651489 24.86977005004883 L 3.312279939651489 25.86977005004883 L 3.312279939651489 34 L 17.49966049194336 34 M 18.49966049194336 35 L 2.312279939651489 35 L 2.312279939651489 25.86977005004883 L 0 25.86977005004883 L 0 0 L 37 0 L 37 25.86977005004883 L 18.49966049194336 25.86977005004883 L 18.49966049194336 35 Z" stroke="none"/>
          </g>
        </g>
        <text id="_6-3" data-name="6" transform="translate(31 93)" fontSize="16" fontFamily="HelveticaNeue, Helvetica Neue"><tspan x="-4.448" y="0">6</tspan></text>
      </g>
    </g>
  </g>
);
case "city-plan-level-1--5":
return (
  <g id="Grupo_212" data-name="Grupo 212" transform="translate(-471 -84)">
    <rect id="Rectángulo_98" data-name="Rectángulo 98" width="53" height="180" transform="translate(471 84)" fill="none"/>
    <g id="Grupo_100" data-name="Grupo 100" transform="translate(465 51)">
      <g id="Grupo_46" data-name="Grupo 46" transform="translate(14 76)">
        <g id="Unión_22" data-name="Unión 22" transform="translate(0 0)" fill="none">
          <path d="M2.312,35V25.87H0V0H37V25.87H18.5V35Z" stroke="none"/>
          <path d="M 17.49966049194336 34 L 17.49966049194336 25.86977005004883 L 17.49966049194336 24.86977005004883 L 18.49966049194336 24.86977005004883 L 36 24.86977005004883 L 36 1 L 1 1 L 1 24.86977005004883 L 2.312279939651489 24.86977005004883 L 3.312279939651489 24.86977005004883 L 3.312279939651489 25.86977005004883 L 3.312279939651489 34 L 17.49966049194336 34 M 18.49966049194336 35 L 2.312279939651489 35 L 2.312279939651489 25.86977005004883 L 0 25.86977005004883 L 0 0 L 37 0 L 37 25.86977005004883 L 18.49966049194336 25.86977005004883 L 18.49966049194336 35 Z" stroke="none"/>
        </g>
      </g>
      <text id="_5" data-name="5" transform="translate(31 93)" fontSize="16" fontFamily="HelveticaNeue, Helvetica Neue"><tspan x="-4.448" y="0">5</tspan></text>
    </g>
    <g id="Grupo_101" data-name="Grupo 101" transform="translate(465 100)">
      <g id="Grupo_46-2" data-name="Grupo 46" transform="translate(14 76)">
        <g id="Unión_22-2" data-name="Unión 22" transform="translate(0 0)" fill="none">
          <path d="M2.312,35V25.87H0V0H37V25.87H18.5V35Z" stroke="none"/>
          <path d="M 17.49966049194336 34 L 17.49966049194336 25.86977005004883 L 17.49966049194336 24.86977005004883 L 18.49966049194336 24.86977005004883 L 36 24.86977005004883 L 36 1 L 1 1 L 1 24.86977005004883 L 2.312279939651489 24.86977005004883 L 3.312279939651489 24.86977005004883 L 3.312279939651489 25.86977005004883 L 3.312279939651489 34 L 17.49966049194336 34 M 18.49966049194336 35 L 2.312279939651489 35 L 2.312279939651489 25.86977005004883 L 0 25.86977005004883 L 0 0 L 37 0 L 37 25.86977005004883 L 18.49966049194336 25.86977005004883 L 18.49966049194336 35 Z" stroke="none"/>
        </g>
      </g>
      <text id="_5-2" data-name="5" transform="translate(31 93)" fontSize="16" fontFamily="HelveticaNeue, Helvetica Neue"><tspan x="-4.448" y="0">5</tspan></text>
    </g>
  </g>
);
case "city-plan-level-1--6":
return (
<g id="Grupo_214" data-name="Grupo 214" transform="translate(-533 -84)">
    <g id="Grupo_213" data-name="Grupo 213">
      <rect id="Rectángulo_99" data-name="Rectángulo 99" width="53" height="180" transform="translate(533 84)" fill="none"/>
      <g id="Grupo_103" data-name="Grupo 103" transform="translate(546.487 100.908)">
        <g id="Grupo_46" data-name="Grupo 46" transform="translate(0)">
          <g id="Unión_22" data-name="Unión 22" transform="translate(-0.487 0.092)" fill="none">
            <path d="M1.937,29V21.435H0V0H31V21.435H15.5V29Z" stroke="none"/>
            <path d="M 14.49971008300781 28 L 14.49971008300781 21.43495941162109 L 14.49971008300781 20.43495941162109 L 15.49971008300781 20.43495941162109 L 30 20.43495941162109 L 30 1 L 1 1 L 1 20.43495941162109 L 1.937319993972778 20.43495941162109 L 2.937319993972778 20.43495941162109 L 2.937319993972778 21.43495941162109 L 2.937319993972778 28 L 14.49971008300781 28 M 15.49971008300781 29 L 1.937319993972778 29 L 1.937319993972778 21.43495941162109 L -1.77635683940025e-15 21.43495941162109 L -1.77635683940025e-15 -1.77635683940025e-15 L 31 -1.77635683940025e-15 L 31 21.43495941162109 L 15.49971008300781 21.43495941162109 L 15.49971008300781 29 Z" stroke="none"/>
          </g>
        </g>
        <text id="_2" data-name="2" transform="translate(13.513 16.092)" fontSize="12" fontFamily="HelveticaNeue, Helvetica Neue"><tspan x="-3.336" y="0">2</tspan></text>
      </g>
      <g id="Grupo_104" data-name="Grupo 104" transform="translate(546.487 141.317)">
        <g id="Grupo_46-2" data-name="Grupo 46" transform="translate(0)">
          <g id="Unión_22-2" data-name="Unión 22" transform="translate(-0.487 -0.317)" fill="none">
            <path d="M1.937,29V21.435H0V0H31V21.435H15.5V29Z" stroke="none"/>
            <path d="M 14.49971008300781 28 L 14.49971008300781 21.43495941162109 L 14.49971008300781 20.43495941162109 L 15.49971008300781 20.43495941162109 L 30 20.43495941162109 L 30 1 L 1 1 L 1 20.43495941162109 L 1.937319993972778 20.43495941162109 L 2.937319993972778 20.43495941162109 L 2.937319993972778 21.43495941162109 L 2.937319993972778 28 L 14.49971008300781 28 M 15.49971008300781 29 L 1.937319993972778 29 L 1.937319993972778 21.43495941162109 L -1.77635683940025e-15 21.43495941162109 L -1.77635683940025e-15 -1.77635683940025e-15 L 31 -1.77635683940025e-15 L 31 21.43495941162109 L 15.49971008300781 21.43495941162109 L 15.49971008300781 29 Z" stroke="none"/>
          </g>
        </g>
        <text id="_2-2" data-name="2" transform="translate(13.513 14.683)" fontSize="12" fontFamily="HelveticaNeue, Helvetica Neue"><tspan x="-3.336" y="0">2</tspan></text>
      </g>
      <g id="Grupo_106" data-name="Grupo 106" transform="translate(546.487 181.727)">
        <g id="Grupo_46-3" data-name="Grupo 46" transform="translate(0)">
          <g id="Unión_22-3" data-name="Unión 22" transform="translate(-0.487 0.273)" fill="none">
            <path d="M1.937,29V21.435H0V0H31V21.435H15.5V29Z" stroke="none"/>
            <path d="M 14.49971008300781 28 L 14.49971008300781 21.43495941162109 L 14.49971008300781 20.43495941162109 L 15.49971008300781 20.43495941162109 L 30 20.43495941162109 L 30 1 L 1 1 L 1 20.43495941162109 L 1.937319993972778 20.43495941162109 L 2.937319993972778 20.43495941162109 L 2.937319993972778 21.43495941162109 L 2.937319993972778 28 L 14.49971008300781 28 M 15.49971008300781 29 L 1.937319993972778 29 L 1.937319993972778 21.43495941162109 L -1.77635683940025e-15 21.43495941162109 L -1.77635683940025e-15 -1.77635683940025e-15 L 31 -1.77635683940025e-15 L 31 21.43495941162109 L 15.49971008300781 21.43495941162109 L 15.49971008300781 29 Z" stroke="none"/>
          </g>
        </g>
        <text id="_2-3" data-name="2" transform="translate(13.513 15.273)" fontSize="12" fontFamily="HelveticaNeue, Helvetica Neue"><tspan x="-3.336" y="0">2</tspan></text>
      </g>
      <g id="Grupo_107" data-name="Grupo 107" transform="translate(546.487 222.136)">
        <g id="Grupo_46-4" data-name="Grupo 46" transform="translate(0)">
          <g id="Unión_22-4" data-name="Unión 22" transform="translate(-0.487 -0.136)" fill="none">
            <path d="M1.937,29V21.435H0V0H31V21.435H15.5V29Z" stroke="none"/>
            <path d="M 14.49971008300781 28 L 14.49971008300781 21.43495941162109 L 14.49971008300781 20.43495941162109 L 15.49971008300781 20.43495941162109 L 30 20.43495941162109 L 30 1 L 1 1 L 1 20.43495941162109 L 1.937319993972778 20.43495941162109 L 2.937319993972778 20.43495941162109 L 2.937319993972778 21.43495941162109 L 2.937319993972778 28 L 14.49971008300781 28 M 15.49971008300781 29 L 1.937319993972778 29 L 1.937319993972778 21.43495941162109 L -1.77635683940025e-15 21.43495941162109 L -1.77635683940025e-15 -1.77635683940025e-15 L 31 -1.77635683940025e-15 L 31 21.43495941162109 L 15.49971008300781 21.43495941162109 L 15.49971008300781 29 Z" stroke="none"/>
          </g>
        </g>
        <text id="_2-4" data-name="2" transform="translate(13.513 13.864)" fontSize="12" fontFamily="HelveticaNeue, Helvetica Neue"><tspan x="-3.336" y="0">2</tspan></text>
      </g>
    </g>
  </g>
);
case "city-plan-level-1--7":
return (
  <g id="Grupo_215" data-name="Grupo 215" transform="translate(-595 -84)">
    <rect id="Rectángulo_100" data-name="Rectángulo 100" width="53" height="180" transform="translate(595 84)" fill="none"/>
    <g id="Grupo_116" data-name="Grupo 116" transform="translate(-1 -6)">
      <g id="Grupo_90" data-name="Grupo 90" transform="translate(603.195 162.834)">
        <g id="Grupo_84" data-name="Grupo 84" transform="translate(0 0)">
          <g id="Grupo_46" data-name="Grupo 46" transform="translate(0 0)">
            <g id="Unión_22" data-name="Unión 22" transform="translate(-0.195 0.166)" fill="#d6d6d6">
              <path d="M 4.249919891357422 7.75 L 0.8124499917030334 7.75 L 0.8124499917030334 5.913090229034424 L 0.8124499917030334 5.663090229034424 L 0.5624499917030334 5.663090229034424 L 0.25 5.663090229034424 L 0.25 0.25 L 8.75 0.25 L 8.75 5.663090229034424 L 4.499919891357422 5.663090229034424 L 4.249919891357422 5.663090229034424 L 4.249919891357422 5.913090229034424 L 4.249919891357422 7.75 Z" stroke="none"/>
              <path d="M 3.999919891357422 7.5 L 3.999919891357422 5.913090229034424 L 3.999919891357422 5.413090229034424 L 4.499919891357422 5.413090229034424 L 8.5 5.413090229034424 L 8.5 0.5 L 0.5 0.5 L 0.5 5.413090229034424 L 0.5624499917030334 5.413090229034424 L 1.062450051307678 5.413090229034424 L 1.062450051307678 5.913090229034424 L 1.062450051307678 7.5 L 3.999919891357422 7.5 M 4.499919891357422 8 L 0.5624499917030334 8 L 0.5624499917030334 5.913090229034424 L 0 5.913090229034424 L 0 0 L 9 0 L 9 5.913090229034424 L 4.499919891357422 5.913090229034424 L 4.499919891357422 8 Z" stroke="none"/>
            </g>
          </g>
        </g>
      </g>
      <g id="Grupo_91" data-name="Grupo 91" transform="translate(613.277 162.834)">
        <g id="Grupo_84-2" data-name="Grupo 84" transform="translate(0 0)">
          <g id="Grupo_46-2" data-name="Grupo 46" transform="translate(0 0)">
            <g id="Unión_22-2" data-name="Unión 22" transform="translate(-0.277 0.166)" fill="#fff">
              <path d="M 4.249919891357422 7.75 L 0.8124499917030334 7.75 L 0.8124499917030334 5.913090229034424 L 0.8124499917030334 5.663090229034424 L 0.5624499917030334 5.663090229034424 L 0.25 5.663090229034424 L 0.25 0.25 L 8.75 0.25 L 8.75 5.663090229034424 L 4.499919891357422 5.663090229034424 L 4.249919891357422 5.663090229034424 L 4.249919891357422 5.913090229034424 L 4.249919891357422 7.75 Z" stroke="none"/>
              <path d="M 3.999919891357422 7.5 L 3.999919891357422 5.913090229034424 L 3.999919891357422 5.413090229034424 L 4.499919891357422 5.413090229034424 L 8.5 5.413090229034424 L 8.5 0.5 L 0.5 0.5 L 0.5 5.413090229034424 L 0.5624499917030334 5.413090229034424 L 1.062450051307678 5.413090229034424 L 1.062450051307678 5.913090229034424 L 1.062450051307678 7.5 L 3.999919891357422 7.5 M 4.499919891357422 8 L 0.5624499917030334 8 L 0.5624499917030334 5.913090229034424 L 0 5.913090229034424 L 0 0 L 9 0 L 9 5.913090229034424 L 4.499919891357422 5.913090229034424 L 4.499919891357422 8 Z" stroke="none"/>
            </g>
          </g>
        </g>
      </g>
      <g id="Grupo_92" data-name="Grupo 92" transform="translate(623.359 162.834)">
        <g id="Grupo_84-3" data-name="Grupo 84" transform="translate(0 0)">
          <g id="Grupo_46-3" data-name="Grupo 46" transform="translate(0 0)">
            <g id="Unión_22-3" data-name="Unión 22" transform="translate(-0.359 0.166)" fill="#fff">
              <path d="M 4.249919891357422 7.75 L 0.8124499917030334 7.75 L 0.8124499917030334 5.913090229034424 L 0.8124499917030334 5.663090229034424 L 0.5624499917030334 5.663090229034424 L 0.25 5.663090229034424 L 0.25 0.25 L 8.75 0.25 L 8.75 5.663090229034424 L 4.499919891357422 5.663090229034424 L 4.249919891357422 5.663090229034424 L 4.249919891357422 5.913090229034424 L 4.249919891357422 7.75 Z" stroke="none"/>
              <path d="M 3.999919891357422 7.5 L 3.999919891357422 5.913090229034424 L 3.999919891357422 5.413090229034424 L 4.499919891357422 5.413090229034424 L 8.5 5.413090229034424 L 8.5 0.5 L 0.5 0.5 L 0.5 5.413090229034424 L 0.5624499917030334 5.413090229034424 L 1.062450051307678 5.413090229034424 L 1.062450051307678 5.913090229034424 L 1.062450051307678 7.5 L 3.999919891357422 7.5 M 4.499919891357422 8 L 0.5624499917030334 8 L 0.5624499917030334 5.913090229034424 L 0 5.913090229034424 L 0 0 L 9 0 L 9 5.913090229034424 L 4.499919891357422 5.913090229034424 L 4.499919891357422 8 Z" stroke="none"/>
            </g>
          </g>
        </g>
      </g>
      <g id="Grupo_93" data-name="Grupo 93" transform="translate(603.195 177.956)">
        <g id="Grupo_84-4" data-name="Grupo 84" transform="translate(0 0)">
          <g id="Grupo_46-4" data-name="Grupo 46" transform="translate(0 0)">
            <g id="Unión_22-4" data-name="Unión 22" transform="translate(-0.195 0.044)" fill="#d6d6d6">
              <path d="M 4.249919891357422 7.75 L 0.8124499917030334 7.75 L 0.8124499917030334 5.913090229034424 L 0.8124499917030334 5.663090229034424 L 0.5624499917030334 5.663090229034424 L 0.25 5.663090229034424 L 0.25 0.25 L 8.75 0.25 L 8.75 5.663090229034424 L 4.499919891357422 5.663090229034424 L 4.249919891357422 5.663090229034424 L 4.249919891357422 5.913090229034424 L 4.249919891357422 7.75 Z" stroke="none"/>
              <path d="M 3.999919891357422 7.5 L 3.999919891357422 5.913090229034424 L 3.999919891357422 5.413090229034424 L 4.499919891357422 5.413090229034424 L 8.5 5.413090229034424 L 8.5 0.5 L 0.5 0.5 L 0.5 5.413090229034424 L 0.5624499917030334 5.413090229034424 L 1.062450051307678 5.413090229034424 L 1.062450051307678 5.913090229034424 L 1.062450051307678 7.5 L 3.999919891357422 7.5 M 4.499919891357422 8 L 0.5624499917030334 8 L 0.5624499917030334 5.913090229034424 L 0 5.913090229034424 L 0 0 L 9 0 L 9 5.913090229034424 L 4.499919891357422 5.913090229034424 L 4.499919891357422 8 Z" stroke="none"/>
            </g>
          </g>
        </g>
      </g>
      <g id="Grupo_94" data-name="Grupo 94" transform="translate(613.277 177.956)">
        <g id="Grupo_84-5" data-name="Grupo 84" transform="translate(0 0)">
          <g id="Grupo_46-5" data-name="Grupo 46" transform="translate(0 0)">
            <g id="Unión_22-5" data-name="Unión 22" transform="translate(-0.277 0.044)" fill="#fff">
              <path d="M 4.249919891357422 7.75 L 0.8124499917030334 7.75 L 0.8124499917030334 5.913090229034424 L 0.8124499917030334 5.663090229034424 L 0.5624499917030334 5.663090229034424 L 0.25 5.663090229034424 L 0.25 0.25 L 8.75 0.25 L 8.75 5.663090229034424 L 4.499919891357422 5.663090229034424 L 4.249919891357422 5.663090229034424 L 4.249919891357422 5.913090229034424 L 4.249919891357422 7.75 Z" stroke="none"/>
              <path d="M 3.999919891357422 7.5 L 3.999919891357422 5.913090229034424 L 3.999919891357422 5.413090229034424 L 4.499919891357422 5.413090229034424 L 8.5 5.413090229034424 L 8.5 0.5 L 0.5 0.5 L 0.5 5.413090229034424 L 0.5624499917030334 5.413090229034424 L 1.062450051307678 5.413090229034424 L 1.062450051307678 5.913090229034424 L 1.062450051307678 7.5 L 3.999919891357422 7.5 M 4.499919891357422 8 L 0.5624499917030334 8 L 0.5624499917030334 5.913090229034424 L 0 5.913090229034424 L 0 0 L 9 0 L 9 5.913090229034424 L 4.499919891357422 5.913090229034424 L 4.499919891357422 8 Z" stroke="none"/>
            </g>
          </g>
        </g>
      </g>
      <g id="Grupo_95" data-name="Grupo 95" transform="translate(623.359 177.956)">
        <g id="Grupo_84-6" data-name="Grupo 84" transform="translate(0 0)">
          <g id="Grupo_46-6" data-name="Grupo 46" transform="translate(0 0)">
            <g id="Unión_22-6" data-name="Unión 22" transform="translate(-0.359 0.044)" fill="#fff">
              <path d="M 4.249919891357422 7.75 L 0.8124499917030334 7.75 L 0.8124499917030334 5.913090229034424 L 0.8124499917030334 5.663090229034424 L 0.5624499917030334 5.663090229034424 L 0.25 5.663090229034424 L 0.25 0.25 L 8.75 0.25 L 8.75 5.663090229034424 L 4.499919891357422 5.663090229034424 L 4.249919891357422 5.663090229034424 L 4.249919891357422 5.913090229034424 L 4.249919891357422 7.75 Z" stroke="none"/>
              <path d="M 3.999919891357422 7.5 L 3.999919891357422 5.913090229034424 L 3.999919891357422 5.413090229034424 L 4.499919891357422 5.413090229034424 L 8.5 5.413090229034424 L 8.5 0.5 L 0.5 0.5 L 0.5 5.413090229034424 L 0.5624499917030334 5.413090229034424 L 1.062450051307678 5.413090229034424 L 1.062450051307678 5.913090229034424 L 1.062450051307678 7.5 L 3.999919891357422 7.5 M 4.499919891357422 8 L 0.5624499917030334 8 L 0.5624499917030334 5.913090229034424 L 0 5.913090229034424 L 0 0 L 9 0 L 9 5.913090229034424 L 4.499919891357422 5.913090229034424 L 4.499919891357422 8 Z" stroke="none"/>
            </g>
          </g>
        </g>
      </g>
      <g id="Grupo_96" data-name="Grupo 96" transform="translate(603.195 193.079)">
        <g id="Grupo_84-7" data-name="Grupo 84" transform="translate(0 0)">
          <g id="Grupo_46-7" data-name="Grupo 46" transform="translate(0 0)">
            <g id="Unión_22-7" data-name="Unión 22" transform="translate(-0.195 -0.079)" fill="#d6d6d6">
              <path d="M 4.249919891357422 7.75 L 0.8124499917030334 7.75 L 0.8124499917030334 5.913090229034424 L 0.8124499917030334 5.663090229034424 L 0.5624499917030334 5.663090229034424 L 0.25 5.663090229034424 L 0.25 0.25 L 8.75 0.25 L 8.75 5.663090229034424 L 4.499919891357422 5.663090229034424 L 4.249919891357422 5.663090229034424 L 4.249919891357422 5.913090229034424 L 4.249919891357422 7.75 Z" stroke="none"/>
              <path d="M 3.999919891357422 7.5 L 3.999919891357422 5.913090229034424 L 3.999919891357422 5.413090229034424 L 4.499919891357422 5.413090229034424 L 8.5 5.413090229034424 L 8.5 0.5 L 0.5 0.5 L 0.5 5.413090229034424 L 0.5624499917030334 5.413090229034424 L 1.062450051307678 5.413090229034424 L 1.062450051307678 5.913090229034424 L 1.062450051307678 7.5 L 3.999919891357422 7.5 M 4.499919891357422 8 L 0.5624499917030334 8 L 0.5624499917030334 5.913090229034424 L 0 5.913090229034424 L 0 0 L 9 0 L 9 5.913090229034424 L 4.499919891357422 5.913090229034424 L 4.499919891357422 8 Z" stroke="none"/>
            </g>
          </g>
        </g>
      </g>
      <g id="Grupo_97" data-name="Grupo 97" transform="translate(613.277 193.079)">
        <g id="Grupo_84-8" data-name="Grupo 84" transform="translate(0 0)">
          <g id="Grupo_46-8" data-name="Grupo 46" transform="translate(0 0)">
            <g id="Unión_22-8" data-name="Unión 22" transform="translate(-0.277 -0.079)" fill="#fff">
              <path d="M 4.249919891357422 7.75 L 0.8124499917030334 7.75 L 0.8124499917030334 5.913090229034424 L 0.8124499917030334 5.663090229034424 L 0.5624499917030334 5.663090229034424 L 0.25 5.663090229034424 L 0.25 0.25 L 8.75 0.25 L 8.75 5.663090229034424 L 4.499919891357422 5.663090229034424 L 4.249919891357422 5.663090229034424 L 4.249919891357422 5.913090229034424 L 4.249919891357422 7.75 Z" stroke="none"/>
              <path d="M 3.999919891357422 7.5 L 3.999919891357422 5.913090229034424 L 3.999919891357422 5.413090229034424 L 4.499919891357422 5.413090229034424 L 8.5 5.413090229034424 L 8.5 0.5 L 0.5 0.5 L 0.5 5.413090229034424 L 0.5624499917030334 5.413090229034424 L 1.062450051307678 5.413090229034424 L 1.062450051307678 5.913090229034424 L 1.062450051307678 7.5 L 3.999919891357422 7.5 M 4.499919891357422 8 L 0.5624499917030334 8 L 0.5624499917030334 5.913090229034424 L 0 5.913090229034424 L 0 0 L 9 0 L 9 5.913090229034424 L 4.499919891357422 5.913090229034424 L 4.499919891357422 8 Z" stroke="none"/>
            </g>
          </g>
        </g>
      </g>
      <g id="Grupo_98" data-name="Grupo 98" transform="translate(623.359 193.079)">
        <g id="Grupo_84-9" data-name="Grupo 84" transform="translate(0 0)">
          <g id="Grupo_46-9" data-name="Grupo 46" transform="translate(0 0)">
            <g id="Unión_22-9" data-name="Unión 22" transform="translate(-0.359 -0.079)" fill="#fff">
              <path d="M 4.249919891357422 7.75 L 0.8124499917030334 7.75 L 0.8124499917030334 5.913090229034424 L 0.8124499917030334 5.663090229034424 L 0.5624499917030334 5.663090229034424 L 0.25 5.663090229034424 L 0.25 0.25 L 8.75 0.25 L 8.75 5.663090229034424 L 4.499919891357422 5.663090229034424 L 4.249919891357422 5.663090229034424 L 4.249919891357422 5.913090229034424 L 4.249919891357422 7.75 Z" stroke="none"/>
              <path d="M 3.999919891357422 7.5 L 3.999919891357422 5.913090229034424 L 3.999919891357422 5.413090229034424 L 4.499919891357422 5.413090229034424 L 8.5 5.413090229034424 L 8.5 0.5 L 0.5 0.5 L 0.5 5.413090229034424 L 0.5624499917030334 5.413090229034424 L 1.062450051307678 5.413090229034424 L 1.062450051307678 5.913090229034424 L 1.062450051307678 7.5 L 3.999919891357422 7.5 M 4.499919891357422 8 L 0.5624499917030334 8 L 0.5624499917030334 5.913090229034424 L 0 5.913090229034424 L 0 0 L 9 0 L 9 5.913090229034424 L 4.499919891357422 5.913090229034424 L 4.499919891357422 8 Z" stroke="none"/>
            </g>
          </g>
        </g>
      </g>
      <path id="Polígono_2" data-name="Polígono 2" d="M1.5,0,3,2H0Z" transform="translate(609 192) rotate(180)"/>
      <g id="Grupo_109" data-name="Grupo 109" transform="translate(633.195 162.834)">
        <g id="Grupo_84-10" data-name="Grupo 84" transform="translate(0 0)">
          <g id="Grupo_46-10" data-name="Grupo 46" transform="translate(0 0)">
            <g id="Unión_22-10" data-name="Unión 22" transform="translate(-0.195 0.166)" fill="#d6d6d6">
              <path d="M 4.249919891357422 7.75 L 0.8124499917030334 7.75 L 0.8124499917030334 5.913090229034424 L 0.8124499917030334 5.663090229034424 L 0.5624499917030334 5.663090229034424 L 0.25 5.663090229034424 L 0.25 0.25 L 8.75 0.25 L 8.75 5.663090229034424 L 4.499919891357422 5.663090229034424 L 4.249919891357422 5.663090229034424 L 4.249919891357422 5.913090229034424 L 4.249919891357422 7.75 Z" stroke="none"/>
              <path d="M 3.999919891357422 7.5 L 3.999919891357422 5.913090229034424 L 3.999919891357422 5.413090229034424 L 4.499919891357422 5.413090229034424 L 8.5 5.413090229034424 L 8.5 0.5 L 0.5 0.5 L 0.5 5.413090229034424 L 0.5624499917030334 5.413090229034424 L 1.062450051307678 5.413090229034424 L 1.062450051307678 5.913090229034424 L 1.062450051307678 7.5 L 3.999919891357422 7.5 M 4.499919891357422 8 L 0.5624499917030334 8 L 0.5624499917030334 5.913090229034424 L 0 5.913090229034424 L 0 0 L 9 0 L 9 5.913090229034424 L 4.499919891357422 5.913090229034424 L 4.499919891357422 8 Z" stroke="none"/>
            </g>
          </g>
        </g>
      </g>
      <g id="Grupo_112" data-name="Grupo 112" transform="translate(633.195 177.956)">
        <g id="Grupo_84-11" data-name="Grupo 84" transform="translate(0 0)">
          <g id="Grupo_46-11" data-name="Grupo 46" transform="translate(0 0)">
            <g id="Unión_22-11" data-name="Unión 22" transform="translate(-0.195 0.044)" fill="#d6d6d6">
              <path d="M 4.249919891357422 7.75 L 0.8124499917030334 7.75 L 0.8124499917030334 5.913090229034424 L 0.8124499917030334 5.663090229034424 L 0.5624499917030334 5.663090229034424 L 0.25 5.663090229034424 L 0.25 0.25 L 8.75 0.25 L 8.75 5.663090229034424 L 4.499919891357422 5.663090229034424 L 4.249919891357422 5.663090229034424 L 4.249919891357422 5.913090229034424 L 4.249919891357422 7.75 Z" stroke="none"/>
              <path d="M 3.999919891357422 7.5 L 3.999919891357422 5.913090229034424 L 3.999919891357422 5.413090229034424 L 4.499919891357422 5.413090229034424 L 8.5 5.413090229034424 L 8.5 0.5 L 0.5 0.5 L 0.5 5.413090229034424 L 0.5624499917030334 5.413090229034424 L 1.062450051307678 5.413090229034424 L 1.062450051307678 5.913090229034424 L 1.062450051307678 7.5 L 3.999919891357422 7.5 M 4.499919891357422 8 L 0.5624499917030334 8 L 0.5624499917030334 5.913090229034424 L 0 5.913090229034424 L 0 0 L 9 0 L 9 5.913090229034424 L 4.499919891357422 5.913090229034424 L 4.499919891357422 8 Z" stroke="none"/>
            </g>
          </g>
        </g>
      </g>
      <g id="Grupo_115" data-name="Grupo 115" transform="translate(633.195 193.079)">
        <g id="Grupo_84-12" data-name="Grupo 84" transform="translate(0 0)">
          <g id="Grupo_46-12" data-name="Grupo 46" transform="translate(0 0)">
            <g id="Unión_22-12" data-name="Unión 22" transform="translate(-0.195 -0.079)" fill="#d6d6d6">
              <path d="M 4.249919891357422 7.75 L 0.8124499917030334 7.75 L 0.8124499917030334 5.913090229034424 L 0.8124499917030334 5.663090229034424 L 0.5624499917030334 5.663090229034424 L 0.25 5.663090229034424 L 0.25 0.25 L 8.75 0.25 L 8.75 5.663090229034424 L 4.499919891357422 5.663090229034424 L 4.249919891357422 5.663090229034424 L 4.249919891357422 5.913090229034424 L 4.249919891357422 7.75 Z" stroke="none"/>
              <path d="M 3.999919891357422 7.5 L 3.999919891357422 5.913090229034424 L 3.999919891357422 5.413090229034424 L 4.499919891357422 5.413090229034424 L 8.5 5.413090229034424 L 8.5 0.5 L 0.5 0.5 L 0.5 5.413090229034424 L 0.5624499917030334 5.413090229034424 L 1.062450051307678 5.413090229034424 L 1.062450051307678 5.913090229034424 L 1.062450051307678 7.5 L 3.999919891357422 7.5 M 4.499919891357422 8 L 0.5624499917030334 8 L 0.5624499917030334 5.913090229034424 L 0 5.913090229034424 L 0 0 L 9 0 L 9 5.913090229034424 L 4.499919891357422 5.913090229034424 L 4.499919891357422 8 Z" stroke="none"/>
            </g>
          </g>
        </g>
      </g>
      <path id="Polígono_3" data-name="Polígono 3" d="M1.5,0,3,2H0Z" transform="translate(639 192) rotate(180)"/>
      <path id="Polígono_4" data-name="Polígono 4" d="M1.5,0,3,2H0Z" transform="translate(639 177) rotate(180)"/>
      <path id="Polígono_5" data-name="Polígono 5" d="M1.5,0,3,2H0Z" transform="translate(639 192) rotate(180)"/>
      <path id="Polígono_6" data-name="Polígono 6" d="M1.5,0,3,2H0Z" transform="translate(609 177) rotate(180)"/>
      <path id="Polígono_7" data-name="Polígono 7" d="M1.5,0,3,2H0Z" transform="translate(609 162) rotate(180)"/>
      <path id="Polígono_8" data-name="Polígono 8" d="M1.5,0,3,2H0Z" transform="translate(639 162) rotate(180)"/>
    </g>
  </g>
);
case "city-plan-level-1--8":
return (
  <g id="Grupo_216" data-name="Grupo 216" transform="translate(-655 -84)">
  <rect id="Rectángulo_101" data-name="Rectángulo 101" width="53" height="180" transform="translate(655 84)" fill="none"/>
  <g id="Grupo_118" data-name="Grupo 118" transform="translate(244 40)">
    <g id="Grupo_90" data-name="Grupo 90" transform="translate(60.87 -19)">
      <g id="Grupo_84" data-name="Grupo 84" transform="translate(357 127)">
        <g id="Grupo_46" data-name="Grupo 46" transform="translate(0 0)">
          <g id="Unión_22" data-name="Unión 22" transform="translate(0.13 0)" fill="#d6d6d6">
            <path d="M 5.749889373779297 10.75 L 0.9999295473098755 10.75 L 0.9999295473098755 8.130499839782715 L 0.9999295473098755 7.880499839782715 L 0.7499295473098755 7.880499839782715 L 0.2499995231628418 7.880499839782715 L 0.2499995231628418 0.25 L 11.75 0.25 L 11.75 7.880499839782715 L 5.999889373779297 7.880499839782715 L 5.749889373779297 7.880499839782715 L 5.749889373779297 8.130499839782715 L 5.749889373779297 10.75 Z" stroke="none"/>
            <path d="M 5.499889373779297 10.5 L 5.499889373779297 8.130499839782715 L 5.499889373779297 7.630499839782715 L 5.999889373779297 7.630499839782715 L 11.5 7.630499839782715 L 11.5 0.5 L 0.4999995231628418 0.5 L 0.4999995231628418 7.630499839782715 L 0.7499295473098755 7.630499839782715 L 1.249929547309875 7.630499839782715 L 1.249929547309875 8.130499839782715 L 1.249929547309875 10.5 L 5.499889373779297 10.5 M 5.999889373779297 11 L 0.7499295473098755 11 L 0.7499295473098755 8.130499839782715 L -4.76837158203125e-07 8.130499839782715 L -4.76837158203125e-07 -8.881784197001252e-16 L 12 -8.881784197001252e-16 L 12 8.130499839782715 L 5.999889373779297 8.130499839782715 L 5.999889373779297 11 Z" stroke="none"/>
          </g>
        </g>
      </g>
    </g>
    <g id="Grupo_91" data-name="Grupo 91" transform="translate(74.87 -19)">
      <g id="Grupo_84-2" data-name="Grupo 84" transform="translate(357 127)">
        <g id="Grupo_46-2" data-name="Grupo 46" transform="translate(0 0)">
          <g id="Unión_22-2" data-name="Unión 22" transform="translate(0.13 0)" fill="#d6d6d6">
            <path d="M 5.749889373779297 10.75 L 0.9999295473098755 10.75 L 0.9999295473098755 8.130499839782715 L 0.9999295473098755 7.880499839782715 L 0.7499295473098755 7.880499839782715 L 0.2499995231628418 7.880499839782715 L 0.2499995231628418 0.25 L 11.75 0.25 L 11.75 7.880499839782715 L 5.999889373779297 7.880499839782715 L 5.749889373779297 7.880499839782715 L 5.749889373779297 8.130499839782715 L 5.749889373779297 10.75 Z" stroke="none"/>
            <path d="M 5.499889373779297 10.5 L 5.499889373779297 8.130499839782715 L 5.499889373779297 7.630499839782715 L 5.999889373779297 7.630499839782715 L 11.5 7.630499839782715 L 11.5 0.5 L 0.4999995231628418 0.5 L 0.4999995231628418 7.630499839782715 L 0.7499295473098755 7.630499839782715 L 1.249929547309875 7.630499839782715 L 1.249929547309875 8.130499839782715 L 1.249929547309875 10.5 L 5.499889373779297 10.5 M 5.999889373779297 11 L 0.7499295473098755 11 L 0.7499295473098755 8.130499839782715 L -4.76837158203125e-07 8.130499839782715 L -4.76837158203125e-07 -8.881784197001252e-16 L 12 -8.881784197001252e-16 L 12 8.130499839782715 L 5.999889373779297 8.130499839782715 L 5.999889373779297 11 Z" stroke="none"/>
          </g>
        </g>
      </g>
    </g>
    <g id="Grupo_92" data-name="Grupo 92" transform="translate(88.87 -19)">
      <g id="Grupo_84-3" data-name="Grupo 84" transform="translate(357 127)">
        <g id="Grupo_46-3" data-name="Grupo 46" transform="translate(0 0)">
          <g id="Unión_22-3" data-name="Unión 22" transform="translate(0.13 0)" fill="#d6d6d6">
            <path d="M 5.749889373779297 10.75 L 0.9999295473098755 10.75 L 0.9999295473098755 8.130499839782715 L 0.9999295473098755 7.880499839782715 L 0.7499295473098755 7.880499839782715 L 0.2499995231628418 7.880499839782715 L 0.2499995231628418 0.25 L 11.75 0.25 L 11.75 7.880499839782715 L 5.999889373779297 7.880499839782715 L 5.749889373779297 7.880499839782715 L 5.749889373779297 8.130499839782715 L 5.749889373779297 10.75 Z" stroke="none"/>
            <path d="M 5.499889373779297 10.5 L 5.499889373779297 8.130499839782715 L 5.499889373779297 7.630499839782715 L 5.999889373779297 7.630499839782715 L 11.5 7.630499839782715 L 11.5 0.5 L 0.4999995231628418 0.5 L 0.4999995231628418 7.630499839782715 L 0.7499295473098755 7.630499839782715 L 1.249929547309875 7.630499839782715 L 1.249929547309875 8.130499839782715 L 1.249929547309875 10.5 L 5.499889373779297 10.5 M 5.999889373779297 11 L 0.7499295473098755 11 L 0.7499295473098755 8.130499839782715 L -4.76837158203125e-07 8.130499839782715 L -4.76837158203125e-07 -8.881784197001252e-16 L 12 -8.881784197001252e-16 L 12 8.130499839782715 L 5.999889373779297 8.130499839782715 L 5.999889373779297 11 Z" stroke="none"/>
          </g>
        </g>
      </g>
    </g>
    <g id="Grupo_93" data-name="Grupo 93" transform="translate(60.87 2)">
      <g id="Grupo_84-4" data-name="Grupo 84" transform="translate(357 127)">
        <g id="Grupo_46-4" data-name="Grupo 46" transform="translate(0 0)">
          <g id="Unión_22-4" data-name="Unión 22" transform="translate(0.13 0)" fill="#fff">
            <path d="M 5.749889373779297 10.75 L 0.9999295473098755 10.75 L 0.9999295473098755 8.130499839782715 L 0.9999295473098755 7.880499839782715 L 0.7499295473098755 7.880499839782715 L 0.2499995231628418 7.880499839782715 L 0.2499995231628418 0.25 L 11.75 0.25 L 11.75 7.880499839782715 L 5.999889373779297 7.880499839782715 L 5.749889373779297 7.880499839782715 L 5.749889373779297 8.130499839782715 L 5.749889373779297 10.75 Z" stroke="none"/>
            <path d="M 5.499889373779297 10.5 L 5.499889373779297 8.130499839782715 L 5.499889373779297 7.630499839782715 L 5.999889373779297 7.630499839782715 L 11.5 7.630499839782715 L 11.5 0.5 L 0.4999995231628418 0.5 L 0.4999995231628418 7.630499839782715 L 0.7499295473098755 7.630499839782715 L 1.249929547309875 7.630499839782715 L 1.249929547309875 8.130499839782715 L 1.249929547309875 10.5 L 5.499889373779297 10.5 M 5.999889373779297 11 L 0.7499295473098755 11 L 0.7499295473098755 8.130499839782715 L -4.76837158203125e-07 8.130499839782715 L -4.76837158203125e-07 -8.881784197001252e-16 L 12 -8.881784197001252e-16 L 12 8.130499839782715 L 5.999889373779297 8.130499839782715 L 5.999889373779297 11 Z" stroke="none"/>
          </g>
        </g>
      </g>
    </g>
    <g id="Grupo_94" data-name="Grupo 94" transform="translate(74.87 2)">
      <g id="Grupo_84-5" data-name="Grupo 84" transform="translate(357 127)">
        <g id="Grupo_46-5" data-name="Grupo 46" transform="translate(0 0)">
          <g id="Unión_22-5" data-name="Unión 22" transform="translate(0.13 0)" fill="#fff">
            <path d="M 5.749889373779297 10.75 L 0.9999295473098755 10.75 L 0.9999295473098755 8.130499839782715 L 0.9999295473098755 7.880499839782715 L 0.7499295473098755 7.880499839782715 L 0.2499995231628418 7.880499839782715 L 0.2499995231628418 0.25 L 11.75 0.25 L 11.75 7.880499839782715 L 5.999889373779297 7.880499839782715 L 5.749889373779297 7.880499839782715 L 5.749889373779297 8.130499839782715 L 5.749889373779297 10.75 Z" stroke="none"/>
            <path d="M 5.499889373779297 10.5 L 5.499889373779297 8.130499839782715 L 5.499889373779297 7.630499839782715 L 5.999889373779297 7.630499839782715 L 11.5 7.630499839782715 L 11.5 0.5 L 0.4999995231628418 0.5 L 0.4999995231628418 7.630499839782715 L 0.7499295473098755 7.630499839782715 L 1.249929547309875 7.630499839782715 L 1.249929547309875 8.130499839782715 L 1.249929547309875 10.5 L 5.499889373779297 10.5 M 5.999889373779297 11 L 0.7499295473098755 11 L 0.7499295473098755 8.130499839782715 L -4.76837158203125e-07 8.130499839782715 L -4.76837158203125e-07 -8.881784197001252e-16 L 12 -8.881784197001252e-16 L 12 8.130499839782715 L 5.999889373779297 8.130499839782715 L 5.999889373779297 11 Z" stroke="none"/>
          </g>
        </g>
      </g>
    </g>
    <g id="Grupo_95" data-name="Grupo 95" transform="translate(88.87 2)">
      <g id="Grupo_84-6" data-name="Grupo 84" transform="translate(357 127)">
        <g id="Grupo_46-6" data-name="Grupo 46" transform="translate(0 0)">
          <g id="Unión_22-6" data-name="Unión 22" transform="translate(0.13 0)" fill="#fff">
            <path d="M 5.749889373779297 10.75 L 0.9999295473098755 10.75 L 0.9999295473098755 8.130499839782715 L 0.9999295473098755 7.880499839782715 L 0.7499295473098755 7.880499839782715 L 0.2499995231628418 7.880499839782715 L 0.2499995231628418 0.25 L 11.75 0.25 L 11.75 7.880499839782715 L 5.999889373779297 7.880499839782715 L 5.749889373779297 7.880499839782715 L 5.749889373779297 8.130499839782715 L 5.749889373779297 10.75 Z" stroke="none"/>
            <path d="M 5.499889373779297 10.5 L 5.499889373779297 8.130499839782715 L 5.499889373779297 7.630499839782715 L 5.999889373779297 7.630499839782715 L 11.5 7.630499839782715 L 11.5 0.5 L 0.4999995231628418 0.5 L 0.4999995231628418 7.630499839782715 L 0.7499295473098755 7.630499839782715 L 1.249929547309875 7.630499839782715 L 1.249929547309875 8.130499839782715 L 1.249929547309875 10.5 L 5.499889373779297 10.5 M 5.999889373779297 11 L 0.7499295473098755 11 L 0.7499295473098755 8.130499839782715 L -4.76837158203125e-07 8.130499839782715 L -4.76837158203125e-07 -8.881784197001252e-16 L 12 -8.881784197001252e-16 L 12 8.130499839782715 L 5.999889373779297 8.130499839782715 L 5.999889373779297 11 Z" stroke="none"/>
          </g>
        </g>
      </g>
    </g>
    <g id="Grupo_96" data-name="Grupo 96" transform="translate(60.87 23)">
      <g id="Grupo_84-7" data-name="Grupo 84" transform="translate(357 127)">
        <g id="Grupo_46-7" data-name="Grupo 46" transform="translate(0 0)">
          <g id="Unión_22-7" data-name="Unión 22" transform="translate(0.13 0)" fill="#fff">
            <path d="M 5.749889373779297 10.75 L 0.9999295473098755 10.75 L 0.9999295473098755 8.130499839782715 L 0.9999295473098755 7.880499839782715 L 0.7499295473098755 7.880499839782715 L 0.2499995231628418 7.880499839782715 L 0.2499995231628418 0.25 L 11.75 0.25 L 11.75 7.880499839782715 L 5.999889373779297 7.880499839782715 L 5.749889373779297 7.880499839782715 L 5.749889373779297 8.130499839782715 L 5.749889373779297 10.75 Z" stroke="none"/>
            <path d="M 5.499889373779297 10.5 L 5.499889373779297 8.130499839782715 L 5.499889373779297 7.630499839782715 L 5.999889373779297 7.630499839782715 L 11.5 7.630499839782715 L 11.5 0.5 L 0.4999995231628418 0.5 L 0.4999995231628418 7.630499839782715 L 0.7499295473098755 7.630499839782715 L 1.249929547309875 7.630499839782715 L 1.249929547309875 8.130499839782715 L 1.249929547309875 10.5 L 5.499889373779297 10.5 M 5.999889373779297 11 L 0.7499295473098755 11 L 0.7499295473098755 8.130499839782715 L -4.76837158203125e-07 8.130499839782715 L -4.76837158203125e-07 -8.881784197001252e-16 L 12 -8.881784197001252e-16 L 12 8.130499839782715 L 5.999889373779297 8.130499839782715 L 5.999889373779297 11 Z" stroke="none"/>
          </g>
        </g>
      </g>
    </g>
    <g id="Grupo_97" data-name="Grupo 97" transform="translate(74.87 23)">
      <g id="Grupo_84-8" data-name="Grupo 84" transform="translate(357 127)">
        <g id="Grupo_46-8" data-name="Grupo 46" transform="translate(0 0)">
          <g id="Unión_22-8" data-name="Unión 22" transform="translate(0.13 0)" fill="#fff">
            <path d="M 5.749889373779297 10.75 L 0.9999295473098755 10.75 L 0.9999295473098755 8.130499839782715 L 0.9999295473098755 7.880499839782715 L 0.7499295473098755 7.880499839782715 L 0.2499995231628418 7.880499839782715 L 0.2499995231628418 0.25 L 11.75 0.25 L 11.75 7.880499839782715 L 5.999889373779297 7.880499839782715 L 5.749889373779297 7.880499839782715 L 5.749889373779297 8.130499839782715 L 5.749889373779297 10.75 Z" stroke="none"/>
            <path d="M 5.499889373779297 10.5 L 5.499889373779297 8.130499839782715 L 5.499889373779297 7.630499839782715 L 5.999889373779297 7.630499839782715 L 11.5 7.630499839782715 L 11.5 0.5 L 0.4999995231628418 0.5 L 0.4999995231628418 7.630499839782715 L 0.7499295473098755 7.630499839782715 L 1.249929547309875 7.630499839782715 L 1.249929547309875 8.130499839782715 L 1.249929547309875 10.5 L 5.499889373779297 10.5 M 5.999889373779297 11 L 0.7499295473098755 11 L 0.7499295473098755 8.130499839782715 L -4.76837158203125e-07 8.130499839782715 L -4.76837158203125e-07 -8.881784197001252e-16 L 12 -8.881784197001252e-16 L 12 8.130499839782715 L 5.999889373779297 8.130499839782715 L 5.999889373779297 11 Z" stroke="none"/>
          </g>
        </g>
      </g>
    </g>
    <g id="Grupo_98" data-name="Grupo 98" transform="translate(88.87 23)">
      <g id="Grupo_84-9" data-name="Grupo 84" transform="translate(357 127)">
        <g id="Grupo_46-9" data-name="Grupo 46" transform="translate(0 0)">
          <g id="Unión_22-9" data-name="Unión 22" transform="translate(0.13 0)" fill="#fff">
            <path d="M 5.749889373779297 10.75 L 0.9999295473098755 10.75 L 0.9999295473098755 8.130499839782715 L 0.9999295473098755 7.880499839782715 L 0.7499295473098755 7.880499839782715 L 0.2499995231628418 7.880499839782715 L 0.2499995231628418 0.25 L 11.75 0.25 L 11.75 7.880499839782715 L 5.999889373779297 7.880499839782715 L 5.749889373779297 7.880499839782715 L 5.749889373779297 8.130499839782715 L 5.749889373779297 10.75 Z" stroke="none"/>
            <path d="M 5.499889373779297 10.5 L 5.499889373779297 8.130499839782715 L 5.499889373779297 7.630499839782715 L 5.999889373779297 7.630499839782715 L 11.5 7.630499839782715 L 11.5 0.5 L 0.4999995231628418 0.5 L 0.4999995231628418 7.630499839782715 L 0.7499295473098755 7.630499839782715 L 1.249929547309875 7.630499839782715 L 1.249929547309875 8.130499839782715 L 1.249929547309875 10.5 L 5.499889373779297 10.5 M 5.999889373779297 11 L 0.7499295473098755 11 L 0.7499295473098755 8.130499839782715 L -4.76837158203125e-07 8.130499839782715 L -4.76837158203125e-07 -8.881784197001252e-16 L 12 -8.881784197001252e-16 L 12 8.130499839782715 L 5.999889373779297 8.130499839782715 L 5.999889373779297 11 Z" stroke="none"/>
          </g>
        </g>
      </g>
    </g>
  </g>
  <path id="Polígono_9" data-name="Polígono 9" d="M1.5,0,3,2H0Z" transform="translate(660.5 150.5) rotate(90)"/>
</g>
);
case "city-plan-level-1--9":
return (
  <g id="Grupo_217" data-name="Grupo 217" transform="translate(-715 -84)">
    <rect id="Rectángulo_91" data-name="Rectángulo 91" width="53" height="180" transform="translate(715 84)" fill="none"/>
    <g id="Grupo_71" data-name="Grupo 71" transform="translate(335.173 30.945)">
      <g id="Unión_13" data-name="Unión 13" transform="translate(386.232 131)" fill="#da5468" strokeLinecap="square">
        <path d="M 7.212600708007812 34.22660064697266 C 5.228170871734619 34.22660064697266 3.355250835418701 33.93762969970703 1.938830852508545 33.41291046142578 C 0.3661308884620667 32.83029937744141 -0.4999991059303284 31.99273109436035 -0.4999991059303284 31.05450057983398 C -0.4999991059303284 31.0318431854248 -0.4990180730819702 31.00970840454102 -0.4971315860748291 30.98802757263184 L -1.06196916103363 30.90734100341797 L 0.02574088238179684 30.18140983581543 L 6.940300941467285 25.56672096252441 L 6.940300941467285 13.65659999847412 C 6.940300941467285 11.83353996276855 7.741790771484375 10.10937023162842 9.197131156921387 8.80172061920166 C 10.51568126678467 7.616973400115967 12.24799251556396 6.8857421875 14.11780071258545 6.71635103225708 L 14.11780071258545 6.67840051651001 L 14.61780071258545 6.67840051651001 L 19.58747291564941 6.67840051651001 L 19.58889770507812 0.7972868680953979 C 19.5878734588623 0.7758129239082336 19.58710098266602 0.753750205039978 19.58710098266602 0.7326003313064575 C 19.58710098266602 0.05294032394886017 20.11784172058105 -0.4999996721744537 20.77020072937012 -0.4999996721744537 C 21.08205604553223 -0.4999996721744537 21.37265396118164 -0.3759084343910217 21.58999824523926 -0.1579996794462204 L 28.97370147705078 -0.1579996794462204 L 29.47370147705078 -0.1579996794462204 L 29.47370147705078 0.3420003354549408 L 29.47370147705078 4.102200508117676 L 29.47370147705078 4.602200508117676 L 28.97370147705078 4.602200508117676 L 21.95420074462891 4.602200508117676 L 21.95420074462891 6.67840051651001 L 33.05430221557617 6.67840051651001 L 33.31349945068359 6.67840051651001 L 33.81349945068359 6.67840051651001 L 33.81349945068359 6.708852767944336 C 35.70603942871094 6.862129688262939 37.4626579284668 7.586646556854248 38.80292129516602 8.775199890136719 C 40.28125 10.08619022369385 41.09540176391602 11.81976985931396 41.09540176391602 13.65659999847412 L 41.09540176391602 26.31870079040527 L 41.09540176391602 26.81870079040527 L 40.59540176391602 26.81870079040527 L 33.31349945068359 26.81870079040527 L 22.47930145263672 26.81870079040527 L 21.61742782592773 26.81870079040527 L 14.48622989654541 32.16831970214844 C 13.84142112731934 32.93825912475586 12.62755393981934 33.40558624267578 11.71236133575439 33.66357040405273 C 10.40571117401123 34.03190994262695 8.84972095489502 34.22660064697266 7.212600708007812 34.22660064697266 Z" stroke="none"/>
        <path d="M 7.212600708007812 33.72660064697266 C 10.49310111999512 33.72660064697266 13.26150131225586 32.91569900512695 14.1372013092041 31.80509948730469 L 21.45073127746582 26.31870079040527 L 21.45420074462891 26.31870079040527 L 22.47930145263672 26.31870079040527 L 33.31349945068359 26.31870079040527 L 40.59540176391602 26.31870079040527 L 40.59540176391602 13.65659999847412 C 40.59540176391602 10.15290069580078 37.35810089111328 7.299000263214111 33.31349945068359 7.182000160217285 L 33.31349945068359 7.17840051651001 L 33.05430221557617 7.17840051651001 L 21.45420074462891 7.17840051651001 L 21.45420074462891 4.102200508117676 L 28.97370147705078 4.102200508117676 L 28.97370147705078 0.3420003354549408 L 21.34911155700684 0.3420003354549408 C 21.22793006896973 0.1365303248167038 21.01390075683594 3.234863186207804e-07 20.77020072937012 3.234863186207804e-07 C 20.39310073852539 3.234863186207804e-07 20.08710098266602 0.3285003304481506 20.08710098266602 0.7326003313064575 C 20.08710098266602 0.7497003078460693 20.0880012512207 0.7677003145217896 20.08890151977539 0.7848003506660461 L 20.08735084533691 7.17840051651001 L 14.61780071258545 7.17840051651001 L 14.61780071258545 7.184980392456055 C 10.62383079528809 7.338920116424561 7.440300941467285 10.17691993713379 7.440300941467285 13.65659999847412 L 7.440300941467285 25.87319946289062 L 7.381800651550293 25.87319946289062 L 0.3033008873462677 30.59729957580566 L 0.3096008896827698 30.59819984436035 C 0.2466008812189102 30.64680099487305 0.1953008770942688 30.6963005065918 0.1575008779764175 30.74580001831055 C 0.03060088120400906 30.89970016479492 8.819579875307682e-07 30.97620010375977 8.819579875307682e-07 31.05450057983398 C 8.819579875307682e-07 32.53049850463867 3.229200839996338 33.72660064697266 7.212600708007812 33.72660064697266 M 7.212600708007812 34.72660064697266 C 5.170371055603027 34.72660064697266 3.235760927200317 34.42657089233398 1.765140891075134 33.88177108764648 C -0.1934432089328766 33.15620422363281 -0.8258695602416992 32.20182037353516 -0.9666945934295654 31.42602729797363 L -2.427239179611206 31.21738052368164 L -0.2518191039562225 29.76552963256836 L 6.440300941467285 25.29929542541504 L 6.440300941467285 13.65659999847412 C 6.440300941467285 9.929829597473145 9.523186683654785 6.834022521972656 13.61780071258545 6.270029544830322 L 13.61780071258545 6.17840051651001 L 14.61780071258545 6.17840051651001 L 19.08759307861328 6.17840051651001 L 19.08889579772949 0.8083372712135315 C 19.08782005310059 0.7830562591552734 19.08710098266602 0.7573506832122803 19.08710098266602 0.7326003313064575 C 19.08710098266602 -0.2227596789598465 19.84214019775391 -0.9999997019767761 20.77020072937012 -0.9999997019767761 C 21.13467788696289 -0.9999997019767761 21.48630332946777 -0.8759435415267944 21.77298545837402 -0.6579996943473816 L 28.97370147705078 -0.6579996943473816 L 29.97370147705078 -0.6579996943473816 L 29.97370147705078 0.3420003354549408 L 29.97370147705078 4.102200508117676 L 29.97370147705078 5.102200508117676 L 28.97370147705078 5.102200508117676 L 22.45420074462891 5.102200508117676 L 22.45420074462891 6.17840051651001 L 33.05430221557617 6.17840051651001 L 33.31349945068359 6.17840051651001 L 34.31349945068359 6.17840051651001 L 34.31349945068359 6.258681774139404 C 36.13791275024414 6.493821620941162 37.82284545898438 7.237770557403564 39.13467025756836 8.401110649108887 C 40.72150039672852 9.808310508728027 41.59540176391602 11.67475032806396 41.59540176391602 13.65659999847412 L 41.59540176391602 26.31870079040527 L 41.59540176391602 27.31870079040527 L 40.59540176391602 27.31870079040527 L 33.31349945068359 27.31870079040527 L 22.47930145263672 27.31870079040527 L 21.78412246704102 27.31870079040527 L 14.82949447631836 32.53586196899414 C 14.39906978607178 33.02599716186523 13.5416374206543 33.66738891601562 11.84802055358887 34.14480972290039 C 10.49784088134766 34.52542114257812 8.894941329956055 34.72660064697266 7.212600708007812 34.72660064697266 Z" stroke="none" fill="#b4d6c8"/>
      </g>
      <g id="Grupo_26" data-name="Grupo 26" transform="translate(386.232 131)">
        <path id="Unión_10" data-name="Unión 10" d="M0,8V.765Q0,.74,0,.714C0,.32.224,0,.5,0s.485.3.5.676H1V.7s0,.007,0,.01S1,.723,1,.728L.986,8Z" transform="translate(19.595 0.055)" fill="#da5468"/>
        <rect id="Rectángulo_34" data-name="Rectángulo 34" width="7" height="4" transform="translate(21.595 0.055)" fill="#da5468"/>
        <path id="Unión_8" data-name="Unión 8" d="M18.712,19H0V0H18.712V0C22.76.12,26,2.953,26,6.431V19Z" transform="translate(14.595 7.055)" fill="#da5468"/>
        <path id="Unión_9" data-name="Unión 9" d="M0,19V6.431C0,2.879,3.358,0,7.5,0S15,2.879,15,6.431V19Z" transform="translate(7.595 7.055)" fill="#da5468"/>
        <path id="Unión_11" data-name="Unión 11" d="M0,7.854,7.908,1.922C8.783.811,11.552,0,14.832,0c3.983,0,7.213,1.2,7.213,2.672,0,.078-.03.155-.158.309a.807.807,0,0,1-.152.148h.006L14.663,7.854Z" transform="translate(22.045 33.726) rotate(180)" fill="#da5468"/>
        <path id="Unión_12" data-name="Unión 12" d="M0,18V6.092A6.306,6.306,0,0,1,6.5,0,6.306,6.306,0,0,1,13,6.092V18Z" transform="translate(8.595 8.055)" fill="#b6374d"/>
        <rect id="Rectángulo_36" data-name="Rectángulo 36" height="7" transform="translate(21.595 0.055)" fill="#be4256"/>
        <text id="BIS" transform="translate(22.595 22.055)" fill="#ea94a8" fontSize="10" fontFamily="HelveticaNeue, Helvetica Neue"><tspan x="0" y="0">BIS</tspan></text>
      </g>
    </g>
    <text id="_5" data-name="5" transform="translate(742 147)" fontSize="25" fontFamily="HelveticaNeue, Helvetica Neue"><tspan x="-6.95" y="0">5</tspan></text>
  </g>
);
case "city-plan-level-1--10":
return (
<g id="Grupo_218" data-name="Grupo 218" transform="translate(-775 -84)">
    <rect id="Rectángulo_93" data-name="Rectángulo 93" width="53" height="180" transform="translate(775 84)" fill="none"/>
    <text id="_7" data-name="7" transform="translate(802 147)" fontSize="25" fontFamily="HelveticaNeue, Helvetica Neue"><tspan x="-6.95" y="0">7</tspan></text>
    <g id="Grupo_77" data-name="Grupo 77" transform="translate(510.561 -265.23)">
      <path id="Trazado_8" data-name="Trazado 8" d="M318.4-387.66l-20.059-20.367L318.4-427.659l20.886,20.415Z" transform="translate(-27.339 851.659)" fill="#f2986e"/>
      <path id="Trazado_9" data-name="Trazado 9" d="M-1.157,0H2.032L-2.516,24.891H-5.7Z" transform="translate(283.845 434.093)" fill="#ec7130"/>
      <path id="Trazado_10" data-name="Trazado 10" d="M-2.518,0H-5.7l4.546,24.891H2.028Z" transform="translate(302.744 434.093)" fill="#ec7130"/>
      <rect id="Rectángulo_16" data-name="Rectángulo 16" width="30.302" height="4.115" transform="translate(276.111 444.448)" fill="#fac66a"/>
      <path id="Trazado_11" data-name="Trazado 11" d="M305.5-397.556h3.039l2.57-4.106H305.5Z" transform="translate(-29.393 846.119)" fill="#ec7130"/>
      <path id="Trazado_12" data-name="Trazado 12" d="M336.242-397.364h5.194v-4.106h-3.031Z" transform="translate(-35.024 845.927)" fill="#eb7132"/>
      <path id="Trazado_14" data-name="Trazado 14" d="M314.36-397.382h3.846l2.414-4.106h-3.914Z" transform="translate(-21.817 845.945)" fill="#ec7130"/>
      <path id="Trazado_19" data-name="Trazado 19" d="M314.36-397.382h3.846l2.414-4.106h-3.914Z" transform="translate(-30.587 845.945)" fill="#ec7130"/>
      <g id="Grupo_10" data-name="Grupo 10" transform="translate(276.111 436.966)">
        <rect id="Rectángulo_17" data-name="Rectángulo 17" width="30.302" height="4.115" fill="#fac66a"/>
        <path id="Trazado_20" data-name="Trazado 20" d="M305.5-397.556h3.039l2.57-4.106H305.5Z" transform="translate(-305.503 401.671)" fill="#ec7130"/>
        <path id="Trazado_21" data-name="Trazado 21" d="M336.242-397.364h5.194v-4.106h-3.031Z" transform="translate(-311.134 401.479)" fill="#eb7132"/>
        <path id="Trazado_22" data-name="Trazado 22" d="M314.36-397.382h3.846l2.414-4.106h-3.914Z" transform="translate(-297.928 401.497)" fill="#ec7130"/>
        <path id="Trazado_23" data-name="Trazado 23" d="M314.36-397.382h3.846l2.414-4.106h-3.914Z" transform="translate(-306.698 401.497)" fill="#ec7130"/>
      </g>
    </g>
  </g>
);
case "city-plan-level-1--11":
return (
  <g id="Grupo_219" data-name="Grupo 219" transform="translate(-847 -84)">
  <rect id="Rectángulo_97" data-name="Rectángulo 97" width="53" height="180" transform="translate(847 84)" fill="none"/>
  <g id="Grupo_99" data-name="Grupo 99" transform="translate(436 40)">
    <g id="Grupo_90" data-name="Grupo 90" transform="translate(60.87 -19)">
      <g id="Grupo_84" data-name="Grupo 84" transform="translate(357 127)">
        <g id="Grupo_46" data-name="Grupo 46" transform="translate(0 0)">
          <g id="Unión_22" data-name="Unión 22" transform="translate(0.13 0)" fill="#fff">
            <path d="M 5.749889373779297 10.75 L 0.9999295473098755 10.75 L 0.9999295473098755 8.130499839782715 L 0.9999295473098755 7.880499839782715 L 0.7499295473098755 7.880499839782715 L 0.2499995231628418 7.880499839782715 L 0.2499995231628418 0.25 L 11.75 0.25 L 11.75 7.880499839782715 L 5.999889373779297 7.880499839782715 L 5.749889373779297 7.880499839782715 L 5.749889373779297 8.130499839782715 L 5.749889373779297 10.75 Z" stroke="none"/>
            <path d="M 5.499889373779297 10.5 L 5.499889373779297 8.130499839782715 L 5.499889373779297 7.630499839782715 L 5.999889373779297 7.630499839782715 L 11.5 7.630499839782715 L 11.5 0.5 L 0.4999995231628418 0.5 L 0.4999995231628418 7.630499839782715 L 0.7499295473098755 7.630499839782715 L 1.249929547309875 7.630499839782715 L 1.249929547309875 8.130499839782715 L 1.249929547309875 10.5 L 5.499889373779297 10.5 M 5.999889373779297 11 L 0.7499295473098755 11 L 0.7499295473098755 8.130499839782715 L -4.76837158203125e-07 8.130499839782715 L -4.76837158203125e-07 -8.881784197001252e-16 L 12 -8.881784197001252e-16 L 12 8.130499839782715 L 5.999889373779297 8.130499839782715 L 5.999889373779297 11 Z" stroke="none"/>
          </g>
        </g>
      </g>
    </g>
    <g id="Grupo_91" data-name="Grupo 91" transform="translate(74.87 -19)">
      <g id="Grupo_84-2" data-name="Grupo 84" transform="translate(357 127)">
        <g id="Grupo_46-2" data-name="Grupo 46" transform="translate(0 0)">
          <g id="Unión_22-2" data-name="Unión 22" transform="translate(0.13 0)" fill="#fff">
            <path d="M 5.749889373779297 10.75 L 0.9999295473098755 10.75 L 0.9999295473098755 8.130499839782715 L 0.9999295473098755 7.880499839782715 L 0.7499295473098755 7.880499839782715 L 0.2499995231628418 7.880499839782715 L 0.2499995231628418 0.25 L 11.75 0.25 L 11.75 7.880499839782715 L 5.999889373779297 7.880499839782715 L 5.749889373779297 7.880499839782715 L 5.749889373779297 8.130499839782715 L 5.749889373779297 10.75 Z" stroke="none"/>
            <path d="M 5.499889373779297 10.5 L 5.499889373779297 8.130499839782715 L 5.499889373779297 7.630499839782715 L 5.999889373779297 7.630499839782715 L 11.5 7.630499839782715 L 11.5 0.5 L 0.4999995231628418 0.5 L 0.4999995231628418 7.630499839782715 L 0.7499295473098755 7.630499839782715 L 1.249929547309875 7.630499839782715 L 1.249929547309875 8.130499839782715 L 1.249929547309875 10.5 L 5.499889373779297 10.5 M 5.999889373779297 11 L 0.7499295473098755 11 L 0.7499295473098755 8.130499839782715 L -4.76837158203125e-07 8.130499839782715 L -4.76837158203125e-07 -8.881784197001252e-16 L 12 -8.881784197001252e-16 L 12 8.130499839782715 L 5.999889373779297 8.130499839782715 L 5.999889373779297 11 Z" stroke="none"/>
          </g>
        </g>
      </g>
    </g>
    <g id="Grupo_92" data-name="Grupo 92" transform="translate(88.87 -19)">
      <g id="Grupo_84-3" data-name="Grupo 84" transform="translate(357 127)">
        <g id="Grupo_46-3" data-name="Grupo 46" transform="translate(0 0)">
          <g id="Unión_22-3" data-name="Unión 22" transform="translate(0.13 0)" fill="#fff">
            <path d="M 5.749889373779297 10.75 L 0.9999295473098755 10.75 L 0.9999295473098755 8.130499839782715 L 0.9999295473098755 7.880499839782715 L 0.7499295473098755 7.880499839782715 L 0.2499995231628418 7.880499839782715 L 0.2499995231628418 0.25 L 11.75 0.25 L 11.75 7.880499839782715 L 5.999889373779297 7.880499839782715 L 5.749889373779297 7.880499839782715 L 5.749889373779297 8.130499839782715 L 5.749889373779297 10.75 Z" stroke="none"/>
            <path d="M 5.499889373779297 10.5 L 5.499889373779297 8.130499839782715 L 5.499889373779297 7.630499839782715 L 5.999889373779297 7.630499839782715 L 11.5 7.630499839782715 L 11.5 0.5 L 0.4999995231628418 0.5 L 0.4999995231628418 7.630499839782715 L 0.7499295473098755 7.630499839782715 L 1.249929547309875 7.630499839782715 L 1.249929547309875 8.130499839782715 L 1.249929547309875 10.5 L 5.499889373779297 10.5 M 5.999889373779297 11 L 0.7499295473098755 11 L 0.7499295473098755 8.130499839782715 L -4.76837158203125e-07 8.130499839782715 L -4.76837158203125e-07 -8.881784197001252e-16 L 12 -8.881784197001252e-16 L 12 8.130499839782715 L 5.999889373779297 8.130499839782715 L 5.999889373779297 11 Z" stroke="none"/>
          </g>
        </g>
      </g>
    </g>
    <g id="Grupo_93" data-name="Grupo 93" transform="translate(60.87 2)">
      <g id="Grupo_84-4" data-name="Grupo 84" transform="translate(357 127)">
        <g id="Grupo_46-4" data-name="Grupo 46" transform="translate(0 0)">
          <g id="Unión_22-4" data-name="Unión 22" transform="translate(0.13 0)" fill="#fff">
            <path d="M 5.749889373779297 10.75 L 0.9999295473098755 10.75 L 0.9999295473098755 8.130499839782715 L 0.9999295473098755 7.880499839782715 L 0.7499295473098755 7.880499839782715 L 0.2499995231628418 7.880499839782715 L 0.2499995231628418 0.25 L 11.75 0.25 L 11.75 7.880499839782715 L 5.999889373779297 7.880499839782715 L 5.749889373779297 7.880499839782715 L 5.749889373779297 8.130499839782715 L 5.749889373779297 10.75 Z" stroke="none"/>
            <path d="M 5.499889373779297 10.5 L 5.499889373779297 8.130499839782715 L 5.499889373779297 7.630499839782715 L 5.999889373779297 7.630499839782715 L 11.5 7.630499839782715 L 11.5 0.5 L 0.4999995231628418 0.5 L 0.4999995231628418 7.630499839782715 L 0.7499295473098755 7.630499839782715 L 1.249929547309875 7.630499839782715 L 1.249929547309875 8.130499839782715 L 1.249929547309875 10.5 L 5.499889373779297 10.5 M 5.999889373779297 11 L 0.7499295473098755 11 L 0.7499295473098755 8.130499839782715 L -4.76837158203125e-07 8.130499839782715 L -4.76837158203125e-07 -8.881784197001252e-16 L 12 -8.881784197001252e-16 L 12 8.130499839782715 L 5.999889373779297 8.130499839782715 L 5.999889373779297 11 Z" stroke="none"/>
          </g>
        </g>
      </g>
    </g>
    <g id="Grupo_94" data-name="Grupo 94" transform="translate(74.87 2)">
      <g id="Grupo_84-5" data-name="Grupo 84" transform="translate(357 127)">
        <g id="Grupo_46-5" data-name="Grupo 46" transform="translate(0 0)">
          <g id="Unión_22-5" data-name="Unión 22" transform="translate(0.13 0)" fill="#fff">
            <path d="M 5.749889373779297 10.75 L 0.9999295473098755 10.75 L 0.9999295473098755 8.130499839782715 L 0.9999295473098755 7.880499839782715 L 0.7499295473098755 7.880499839782715 L 0.2499995231628418 7.880499839782715 L 0.2499995231628418 0.25 L 11.75 0.25 L 11.75 7.880499839782715 L 5.999889373779297 7.880499839782715 L 5.749889373779297 7.880499839782715 L 5.749889373779297 8.130499839782715 L 5.749889373779297 10.75 Z" stroke="none"/>
            <path d="M 5.499889373779297 10.5 L 5.499889373779297 8.130499839782715 L 5.499889373779297 7.630499839782715 L 5.999889373779297 7.630499839782715 L 11.5 7.630499839782715 L 11.5 0.5 L 0.4999995231628418 0.5 L 0.4999995231628418 7.630499839782715 L 0.7499295473098755 7.630499839782715 L 1.249929547309875 7.630499839782715 L 1.249929547309875 8.130499839782715 L 1.249929547309875 10.5 L 5.499889373779297 10.5 M 5.999889373779297 11 L 0.7499295473098755 11 L 0.7499295473098755 8.130499839782715 L -4.76837158203125e-07 8.130499839782715 L -4.76837158203125e-07 -8.881784197001252e-16 L 12 -8.881784197001252e-16 L 12 8.130499839782715 L 5.999889373779297 8.130499839782715 L 5.999889373779297 11 Z" stroke="none"/>
          </g>
        </g>
      </g>
    </g>
    <g id="Grupo_95" data-name="Grupo 95" transform="translate(88.87 2)">
      <g id="Grupo_84-6" data-name="Grupo 84" transform="translate(357 127)">
        <g id="Grupo_46-6" data-name="Grupo 46" transform="translate(0 0)">
          <g id="Unión_22-6" data-name="Unión 22" transform="translate(0.13 0)" fill="#fff">
            <path d="M 5.749889373779297 10.75 L 0.9999295473098755 10.75 L 0.9999295473098755 8.130499839782715 L 0.9999295473098755 7.880499839782715 L 0.7499295473098755 7.880499839782715 L 0.2499995231628418 7.880499839782715 L 0.2499995231628418 0.25 L 11.75 0.25 L 11.75 7.880499839782715 L 5.999889373779297 7.880499839782715 L 5.749889373779297 7.880499839782715 L 5.749889373779297 8.130499839782715 L 5.749889373779297 10.75 Z" stroke="none"/>
            <path d="M 5.499889373779297 10.5 L 5.499889373779297 8.130499839782715 L 5.499889373779297 7.630499839782715 L 5.999889373779297 7.630499839782715 L 11.5 7.630499839782715 L 11.5 0.5 L 0.4999995231628418 0.5 L 0.4999995231628418 7.630499839782715 L 0.7499295473098755 7.630499839782715 L 1.249929547309875 7.630499839782715 L 1.249929547309875 8.130499839782715 L 1.249929547309875 10.5 L 5.499889373779297 10.5 M 5.999889373779297 11 L 0.7499295473098755 11 L 0.7499295473098755 8.130499839782715 L -4.76837158203125e-07 8.130499839782715 L -4.76837158203125e-07 -8.881784197001252e-16 L 12 -8.881784197001252e-16 L 12 8.130499839782715 L 5.999889373779297 8.130499839782715 L 5.999889373779297 11 Z" stroke="none"/>
          </g>
        </g>
      </g>
    </g>
    <g id="Grupo_96" data-name="Grupo 96" transform="translate(60.87 23)">
      <g id="Grupo_84-7" data-name="Grupo 84" transform="translate(357 127)">
        <g id="Grupo_46-7" data-name="Grupo 46" transform="translate(0 0)">
          <g id="Unión_22-7" data-name="Unión 22" transform="translate(0.13 0)" fill="#d6d6d6">
            <path d="M 5.749889373779297 10.75 L 0.9999295473098755 10.75 L 0.9999295473098755 8.130499839782715 L 0.9999295473098755 7.880499839782715 L 0.7499295473098755 7.880499839782715 L 0.2499995231628418 7.880499839782715 L 0.2499995231628418 0.25 L 11.75 0.25 L 11.75 7.880499839782715 L 5.999889373779297 7.880499839782715 L 5.749889373779297 7.880499839782715 L 5.749889373779297 8.130499839782715 L 5.749889373779297 10.75 Z" stroke="none"/>
            <path d="M 5.499889373779297 10.5 L 5.499889373779297 8.130499839782715 L 5.499889373779297 7.630499839782715 L 5.999889373779297 7.630499839782715 L 11.5 7.630499839782715 L 11.5 0.5 L 0.4999995231628418 0.5 L 0.4999995231628418 7.630499839782715 L 0.7499295473098755 7.630499839782715 L 1.249929547309875 7.630499839782715 L 1.249929547309875 8.130499839782715 L 1.249929547309875 10.5 L 5.499889373779297 10.5 M 5.999889373779297 11 L 0.7499295473098755 11 L 0.7499295473098755 8.130499839782715 L -4.76837158203125e-07 8.130499839782715 L -4.76837158203125e-07 -8.881784197001252e-16 L 12 -8.881784197001252e-16 L 12 8.130499839782715 L 5.999889373779297 8.130499839782715 L 5.999889373779297 11 Z" stroke="none"/>
          </g>
        </g>
      </g>
    </g>
    <g id="Grupo_97" data-name="Grupo 97" transform="translate(74.87 23)">
      <g id="Grupo_84-8" data-name="Grupo 84" transform="translate(357 127)">
        <g id="Grupo_46-8" data-name="Grupo 46" transform="translate(0 0)">
          <g id="Unión_22-8" data-name="Unión 22" transform="translate(0.13 0)" fill="#d6d6d6">
            <path d="M 5.749889373779297 10.75 L 0.9999295473098755 10.75 L 0.9999295473098755 8.130499839782715 L 0.9999295473098755 7.880499839782715 L 0.7499295473098755 7.880499839782715 L 0.2499995231628418 7.880499839782715 L 0.2499995231628418 0.25 L 11.75 0.25 L 11.75 7.880499839782715 L 5.999889373779297 7.880499839782715 L 5.749889373779297 7.880499839782715 L 5.749889373779297 8.130499839782715 L 5.749889373779297 10.75 Z" stroke="none"/>
            <path d="M 5.499889373779297 10.5 L 5.499889373779297 8.130499839782715 L 5.499889373779297 7.630499839782715 L 5.999889373779297 7.630499839782715 L 11.5 7.630499839782715 L 11.5 0.5 L 0.4999995231628418 0.5 L 0.4999995231628418 7.630499839782715 L 0.7499295473098755 7.630499839782715 L 1.249929547309875 7.630499839782715 L 1.249929547309875 8.130499839782715 L 1.249929547309875 10.5 L 5.499889373779297 10.5 M 5.999889373779297 11 L 0.7499295473098755 11 L 0.7499295473098755 8.130499839782715 L -4.76837158203125e-07 8.130499839782715 L -4.76837158203125e-07 -8.881784197001252e-16 L 12 -8.881784197001252e-16 L 12 8.130499839782715 L 5.999889373779297 8.130499839782715 L 5.999889373779297 11 Z" stroke="none"/>
          </g>
        </g>
      </g>
    </g>
    <g id="Grupo_98" data-name="Grupo 98" transform="translate(88.87 23)">
      <g id="Grupo_84-9" data-name="Grupo 84" transform="translate(357 127)">
        <g id="Grupo_46-9" data-name="Grupo 46" transform="translate(0 0)">
          <g id="Unión_22-9" data-name="Unión 22" transform="translate(0.13 0)" fill="#d6d6d6">
            <path d="M 5.749889373779297 10.75 L 0.9999295473098755 10.75 L 0.9999295473098755 8.130499839782715 L 0.9999295473098755 7.880499839782715 L 0.7499295473098755 7.880499839782715 L 0.2499995231628418 7.880499839782715 L 0.2499995231628418 0.25 L 11.75 0.25 L 11.75 7.880499839782715 L 5.999889373779297 7.880499839782715 L 5.749889373779297 7.880499839782715 L 5.749889373779297 8.130499839782715 L 5.749889373779297 10.75 Z" stroke="none"/>
            <path d="M 5.499889373779297 10.5 L 5.499889373779297 8.130499839782715 L 5.499889373779297 7.630499839782715 L 5.999889373779297 7.630499839782715 L 11.5 7.630499839782715 L 11.5 0.5 L 0.4999995231628418 0.5 L 0.4999995231628418 7.630499839782715 L 0.7499295473098755 7.630499839782715 L 1.249929547309875 7.630499839782715 L 1.249929547309875 8.130499839782715 L 1.249929547309875 10.5 L 5.499889373779297 10.5 M 5.999889373779297 11 L 0.7499295473098755 11 L 0.7499295473098755 8.130499839782715 L -4.76837158203125e-07 8.130499839782715 L -4.76837158203125e-07 -8.881784197001252e-16 L 12 -8.881784197001252e-16 L 12 8.130499839782715 L 5.999889373779297 8.130499839782715 L 5.999889373779297 11 Z" stroke="none"/>
          </g>
        </g>
      </g>
    </g>
  </g>
</g>
);


case "city-plan-level-2--1":
return (
  <g id="Grupo_220" data-name="Grupo 220" transform="translate(-49 -342)">
    <rect id="Rectángulo_102" data-name="Rectángulo 102" width="53" height="180" transform="translate(49 342)" fill="none"/>
    <g id="Grupo_120" data-name="Grupo 120" transform="translate(-300 239)">
      <g id="Grupo_84" data-name="Grupo 84" transform="translate(343 51)">
        <g id="Grupo_46" data-name="Grupo 46" transform="translate(14 76)">
          <g id="Unión_22" data-name="Unión 22" transform="translate(0 0)" fill="none">
            <path d="M2.312,35V25.87H0V0H37V25.87H18.5V35Z" stroke="none"/>
            <path d="M 17.49966049194336 34 L 17.49966049194336 25.86977005004883 L 17.49966049194336 24.86977005004883 L 18.49966049194336 24.86977005004883 L 36 24.86977005004883 L 36 1 L 1 1 L 1 24.86977005004883 L 2.312279939651489 24.86977005004883 L 3.312279939651489 24.86977005004883 L 3.312279939651489 25.86977005004883 L 3.312279939651489 34 L 17.49966049194336 34 M 18.49966049194336 35 L 2.312279939651489 35 L 2.312279939651489 25.86977005004883 L 0 25.86977005004883 L 0 0 L 37 0 L 37 25.86977005004883 L 18.49966049194336 25.86977005004883 L 18.49966049194336 35 Z" stroke="none"/>
          </g>
        </g>
        <text id="_5" data-name="5" transform="translate(31 93)" fontSize="16" fontFamily="HelveticaNeue, Helvetica Neue"><tspan x="-4.448" y="0">5</tspan></text>
      </g>
      <g id="Grupo_85" data-name="Grupo 85" transform="translate(343 100)">
        <g id="Grupo_46-2" data-name="Grupo 46" transform="translate(14 76)">
          <g id="Unión_22-2" data-name="Unión 22" transform="translate(0 0)" fill="none">
            <path d="M2.312,35V25.87H0V0H37V25.87H18.5V35Z" stroke="none"/>
            <path d="M 17.49966049194336 34 L 17.49966049194336 25.86977005004883 L 17.49966049194336 24.86977005004883 L 18.49966049194336 24.86977005004883 L 36 24.86977005004883 L 36 1 L 1 1 L 1 24.86977005004883 L 2.312279939651489 24.86977005004883 L 3.312279939651489 24.86977005004883 L 3.312279939651489 25.86977005004883 L 3.312279939651489 34 L 17.49966049194336 34 M 18.49966049194336 35 L 2.312279939651489 35 L 2.312279939651489 25.86977005004883 L 0 25.86977005004883 L 0 0 L 37 0 L 37 25.86977005004883 L 18.49966049194336 25.86977005004883 L 18.49966049194336 35 Z" stroke="none"/>
          </g>
        </g>
        <text id="_2" data-name="2" transform="translate(31 93)" fontSize="16" fontFamily="HelveticaNeue, Helvetica Neue"><tspan x="-4.448" y="0">2</tspan></text>
      </g>
      <g id="Grupo_87" data-name="Grupo 87" transform="translate(343 149)">
        <g id="Grupo_46-3" data-name="Grupo 46" transform="translate(14 76)">
          <g id="Unión_22-3" data-name="Unión 22" transform="translate(0 0)" fill="none">
            <path d="M2.312,35V25.87H0V0H37V25.87H18.5V35Z" stroke="none"/>
            <path d="M 17.49966049194336 34 L 17.49966049194336 25.86977005004883 L 17.49966049194336 24.86977005004883 L 18.49966049194336 24.86977005004883 L 36 24.86977005004883 L 36 1 L 1 1 L 1 24.86977005004883 L 2.312279939651489 24.86977005004883 L 3.312279939651489 24.86977005004883 L 3.312279939651489 25.86977005004883 L 3.312279939651489 34 L 17.49966049194336 34 M 18.49966049194336 35 L 2.312279939651489 35 L 2.312279939651489 25.86977005004883 L 0 25.86977005004883 L 0 0 L 37 0 L 37 25.86977005004883 L 18.49966049194336 25.86977005004883 L 18.49966049194336 35 Z" stroke="none"/>
          </g>
        </g>
        <text id="_2-2" data-name="2" transform="translate(31 93)" fontSize="16" fontFamily="HelveticaNeue, Helvetica Neue"><tspan x="-4.448" y="0">2</tspan></text>
      </g>
    </g>
  </g>
);
case "city-plan-level-2--2":
return (
<g id="Grupo_221" data-name="Grupo 221" transform="translate(-108 -342)">
    <rect id="Rectángulo_103" data-name="Rectángulo 103" width="53" height="180" transform="translate(108 342)" fill="none"/>
    <g id="Grupo_122" data-name="Grupo 122" transform="translate(-241 239)">
      <g id="Grupo_84" data-name="Grupo 84" transform="translate(343 51)">
        <g id="Grupo_46" data-name="Grupo 46" transform="translate(14 76)">
          <g id="Unión_22" data-name="Unión 22" transform="translate(0 0)" fill="none">
            <path d="M2.312,35V25.87H0V0H37V25.87H18.5V35Z" stroke="none"/>
            <path d="M 17.49966049194336 34 L 17.49966049194336 25.86977005004883 L 17.49966049194336 24.86977005004883 L 18.49966049194336 24.86977005004883 L 36 24.86977005004883 L 36 1 L 1 1 L 1 24.86977005004883 L 2.312279939651489 24.86977005004883 L 3.312279939651489 24.86977005004883 L 3.312279939651489 25.86977005004883 L 3.312279939651489 34 L 17.49966049194336 34 M 18.49966049194336 35 L 2.312279939651489 35 L 2.312279939651489 25.86977005004883 L 0 25.86977005004883 L 0 0 L 37 0 L 37 25.86977005004883 L 18.49966049194336 25.86977005004883 L 18.49966049194336 35 Z" stroke="none"/>
          </g>
        </g>
        <text id="_3" data-name="3" transform="translate(31 94)" fontSize="16" fontFamily="HelveticaNeue, Helvetica Neue"><tspan x="-4.448" y="0">3</tspan></text>
      </g>
      <g id="Grupo_85" data-name="Grupo 85" transform="translate(343 99)">
        <g id="Grupo_46-2" data-name="Grupo 46" transform="translate(14 76)">
          <g id="Unión_22-2" data-name="Unión 22" transform="translate(0 0)" fill="none">
            <path d="M2.312,35V25.87H0V0H37V25.87H18.5V35Z" stroke="none"/>
            <path d="M 17.49966049194336 34 L 17.49966049194336 25.86977005004883 L 17.49966049194336 24.86977005004883 L 18.49966049194336 24.86977005004883 L 36 24.86977005004883 L 36 1 L 1 1 L 1 24.86977005004883 L 2.312279939651489 24.86977005004883 L 3.312279939651489 24.86977005004883 L 3.312279939651489 25.86977005004883 L 3.312279939651489 34 L 17.49966049194336 34 M 18.49966049194336 35 L 2.312279939651489 35 L 2.312279939651489 25.86977005004883 L 0 25.86977005004883 L 0 0 L 37 0 L 37 25.86977005004883 L 18.49966049194336 25.86977005004883 L 18.49966049194336 35 Z" stroke="none"/>
          </g>
        </g>
        <text id="_3-2" data-name="3" transform="translate(31 93)" fontSize="16" fontFamily="HelveticaNeue, Helvetica Neue"><tspan x="-4.448" y="0">3</tspan></text>
      </g>
      <g id="Grupo_87" data-name="Grupo 87" transform="translate(343 149)">
        <g id="Grupo_46-3" data-name="Grupo 46" transform="translate(14 76)">
          <g id="Unión_22-3" data-name="Unión 22" transform="translate(0 0)" fill="none">
            <path d="M2.312,35V25.87H0V0H37V25.87H18.5V35Z" stroke="none"/>
            <path d="M 17.49966049194336 34 L 17.49966049194336 25.86977005004883 L 17.49966049194336 24.86977005004883 L 18.49966049194336 24.86977005004883 L 36 24.86977005004883 L 36 1 L 1 1 L 1 24.86977005004883 L 2.312279939651489 24.86977005004883 L 3.312279939651489 24.86977005004883 L 3.312279939651489 25.86977005004883 L 3.312279939651489 34 L 17.49966049194336 34 M 18.49966049194336 35 L 2.312279939651489 35 L 2.312279939651489 25.86977005004883 L 0 25.86977005004883 L 0 0 L 37 0 L 37 25.86977005004883 L 18.49966049194336 25.86977005004883 L 18.49966049194336 35 Z" stroke="none"/>
          </g>
        </g>
        <text id="_4" data-name="4" transform="translate(31 93)" fontSize="16" fontFamily="HelveticaNeue, Helvetica Neue"><tspan x="-4.448" y="0">4</tspan></text>
      </g>
    </g>
  </g>
);
case "city-plan-level-2--3":
return (
  <g id="Grupo_222" data-name="Grupo 222" transform="translate(-167 -342)">
    <rect id="Rectángulo_104" data-name="Rectángulo 104" width="53" height="180" transform="translate(167 342)" fill="none"/>
    <g id="Grupo_123" data-name="Grupo 123" transform="translate(161 309)">
      <g id="Grupo_46" data-name="Grupo 46" transform="translate(14 76)">
        <g id="Unión_22" data-name="Unión 22" transform="translate(0 0)" fill="none">
          <path d="M2.312,35V25.87H0V0H37V25.87H18.5V35Z" stroke="none"/>
          <path d="M 17.49966049194336 34 L 17.49966049194336 25.86977005004883 L 17.49966049194336 24.86977005004883 L 18.49966049194336 24.86977005004883 L 36 24.86977005004883 L 36 1 L 1 1 L 1 24.86977005004883 L 2.312279939651489 24.86977005004883 L 3.312279939651489 24.86977005004883 L 3.312279939651489 25.86977005004883 L 3.312279939651489 34 L 17.49966049194336 34 M 18.49966049194336 35 L 2.312279939651489 35 L 2.312279939651489 25.86977005004883 L 0 25.86977005004883 L 0 0 L 37 0 L 37 25.86977005004883 L 18.49966049194336 25.86977005004883 L 18.49966049194336 35 Z" stroke="none"/>
        </g>
      </g>
      <text id="_3" data-name="3" transform="translate(31 93)" fontSize="16" fontFamily="HelveticaNeue, Helvetica Neue"><tspan x="-4.448" y="0">3</tspan></text>
    </g>
    <g id="Grupo_124" data-name="Grupo 124" transform="translate(161 358)">
      <g id="Grupo_46-2" data-name="Grupo 46" transform="translate(14 76)">
        <g id="Unión_22-2" data-name="Unión 22" transform="translate(0 0)" fill="none">
          <path d="M2.312,35V25.87H0V0H37V25.87H18.5V35Z" stroke="none"/>
          <path d="M 17.49966049194336 34 L 17.49966049194336 25.86977005004883 L 17.49966049194336 24.86977005004883 L 18.49966049194336 24.86977005004883 L 36 24.86977005004883 L 36 1 L 1 1 L 1 24.86977005004883 L 2.312279939651489 24.86977005004883 L 3.312279939651489 24.86977005004883 L 3.312279939651489 25.86977005004883 L 3.312279939651489 34 L 17.49966049194336 34 M 18.49966049194336 35 L 2.312279939651489 35 L 2.312279939651489 25.86977005004883 L 0 25.86977005004883 L 0 0 L 37 0 L 37 25.86977005004883 L 18.49966049194336 25.86977005004883 L 18.49966049194336 35 Z" stroke="none"/>
        </g>
      </g>
      <text id="_6" data-name="6" transform="translate(31 93)" fontSize="16" fontFamily="HelveticaNeue, Helvetica Neue"><tspan x="-4.448" y="0">6</tspan></text>
    </g>
  </g>
);
case "city-plan-level-2--4":
return (
<g id="Grupo_223" data-name="Grupo 223" transform="translate(-226 -342)">
    <rect id="Rectángulo_105" data-name="Rectángulo 105" width="53" height="180" transform="translate(226 342)" fill="none"/>
    <g id="Grupo_126" data-name="Grupo 126" transform="translate(239.487 358.908)">
      <g id="Grupo_46" data-name="Grupo 46" transform="translate(0)">
        <g id="Unión_22" data-name="Unión 22" transform="translate(-0.487 0.092)" fill="#fff">
          <path d="M 14.99971008300781 28.5 L 2.437319993972778 28.5 L 2.437319993972778 21.43495941162109 L 2.437319993972778 20.93495941162109 L 1.937319993972778 20.93495941162109 L 0.5 20.93495941162109 L 0.5 0.5 L 30.5 0.5 L 30.5 20.93495941162109 L 15.49971008300781 20.93495941162109 L 14.99971008300781 20.93495941162109 L 14.99971008300781 21.43495941162109 L 14.99971008300781 28.5 Z" stroke="none"/>
          <path d="M 14.49971008300781 28 L 14.49971008300781 21.43495941162109 L 14.49971008300781 20.43495941162109 L 15.49971008300781 20.43495941162109 L 30 20.43495941162109 L 30 1 L 1 1 L 1 20.43495941162109 L 1.937319993972778 20.43495941162109 L 2.937319993972778 20.43495941162109 L 2.937319993972778 21.43495941162109 L 2.937319993972778 28 L 14.49971008300781 28 M 15.49971008300781 29 L 1.937319993972778 29 L 1.937319993972778 21.43495941162109 L -1.77635683940025e-15 21.43495941162109 L -1.77635683940025e-15 -1.77635683940025e-15 L 31 -1.77635683940025e-15 L 31 21.43495941162109 L 15.49971008300781 21.43495941162109 L 15.49971008300781 29 Z" stroke="none"/>
        </g>
      </g>
      <text id="_1" data-name="1" transform="translate(13.513 16.092)" fontSize="12" fontFamily="HelveticaNeue, Helvetica Neue"><tspan x="-3.336" y="0">1</tspan></text>
    </g>
    <g id="Grupo_127" data-name="Grupo 127" transform="translate(239.487 399.317)">
      <g id="Grupo_46-2" data-name="Grupo 46" transform="translate(0)">
        <g id="Unión_22-2" data-name="Unión 22" transform="translate(-0.487 -0.317)" fill="#fff">
          <path d="M 14.99971008300781 28.5 L 2.437319993972778 28.5 L 2.437319993972778 21.43495941162109 L 2.437319993972778 20.93495941162109 L 1.937319993972778 20.93495941162109 L 0.5 20.93495941162109 L 0.5 0.5 L 30.5 0.5 L 30.5 20.93495941162109 L 15.49971008300781 20.93495941162109 L 14.99971008300781 20.93495941162109 L 14.99971008300781 21.43495941162109 L 14.99971008300781 28.5 Z" stroke="none"/>
          <path d="M 14.49971008300781 28 L 14.49971008300781 21.43495941162109 L 14.49971008300781 20.43495941162109 L 15.49971008300781 20.43495941162109 L 30 20.43495941162109 L 30 1 L 1 1 L 1 20.43495941162109 L 1.937319993972778 20.43495941162109 L 2.937319993972778 20.43495941162109 L 2.937319993972778 21.43495941162109 L 2.937319993972778 28 L 14.49971008300781 28 M 15.49971008300781 29 L 1.937319993972778 29 L 1.937319993972778 21.43495941162109 L -1.77635683940025e-15 21.43495941162109 L -1.77635683940025e-15 -1.77635683940025e-15 L 31 -1.77635683940025e-15 L 31 21.43495941162109 L 15.49971008300781 21.43495941162109 L 15.49971008300781 29 Z" stroke="none"/>
        </g>
      </g>
      <text id="_1-2" data-name="1" transform="translate(13.513 14.683)" fontSize="12" fontFamily="HelveticaNeue, Helvetica Neue"><tspan x="-3.336" y="0">1</tspan></text>
    </g>
    <g id="Grupo_129" data-name="Grupo 129" transform="translate(239.487 439.727)">
      <g id="Grupo_46-3" data-name="Grupo 46" transform="translate(0)">
        <g id="Unión_22-3" data-name="Unión 22" transform="translate(-0.487 0.273)" fill="none">
          <path d="M1.937,29V21.435H0V0H31V21.435H15.5V29Z" stroke="none"/>
          <path d="M 14.49971008300781 28 L 14.49971008300781 21.43495941162109 L 14.49971008300781 20.43495941162109 L 15.49971008300781 20.43495941162109 L 30 20.43495941162109 L 30 1 L 1 1 L 1 20.43495941162109 L 1.937319993972778 20.43495941162109 L 2.937319993972778 20.43495941162109 L 2.937319993972778 21.43495941162109 L 2.937319993972778 28 L 14.49971008300781 28 M 15.49971008300781 29 L 1.937319993972778 29 L 1.937319993972778 21.43495941162109 L -1.77635683940025e-15 21.43495941162109 L -1.77635683940025e-15 -1.77635683940025e-15 L 31 -1.77635683940025e-15 L 31 21.43495941162109 L 15.49971008300781 21.43495941162109 L 15.49971008300781 29 Z" stroke="none"/>
        </g>
      </g>
      <text id="_1-3" data-name="1" transform="translate(13.513 15.273)" fontSize="12" fontFamily="HelveticaNeue, Helvetica Neue"><tspan x="-3.336" y="0">1</tspan></text>
    </g>
    <g id="Grupo_130" data-name="Grupo 130" transform="translate(239.487 480.136)">
      <g id="Grupo_46-4" data-name="Grupo 46" transform="translate(0)">
        <g id="Unión_22-4" data-name="Unión 22" transform="translate(-0.487 -0.136)" fill="none">
          <path d="M1.937,29V21.435H0V0H31V21.435H15.5V29Z" stroke="none"/>
          <path d="M 14.49971008300781 28 L 14.49971008300781 21.43495941162109 L 14.49971008300781 20.43495941162109 L 15.49971008300781 20.43495941162109 L 30 20.43495941162109 L 30 1 L 1 1 L 1 20.43495941162109 L 1.937319993972778 20.43495941162109 L 2.937319993972778 20.43495941162109 L 2.937319993972778 21.43495941162109 L 2.937319993972778 28 L 14.49971008300781 28 M 15.49971008300781 29 L 1.937319993972778 29 L 1.937319993972778 21.43495941162109 L -1.77635683940025e-15 21.43495941162109 L -1.77635683940025e-15 -1.77635683940025e-15 L 31 -1.77635683940025e-15 L 31 21.43495941162109 L 15.49971008300781 21.43495941162109 L 15.49971008300781 29 Z" stroke="none"/>
        </g>
      </g>
      <text id="_6" data-name="6" transform="translate(13.513 13.864)" fontSize="12" fontFamily="HelveticaNeue, Helvetica Neue"><tspan x="-3.336" y="0">6</tspan></text>
    </g>
  </g>
);
case "city-plan-level-2--5":
return (
<g id="Grupo_224" data-name="Grupo 224" transform="translate(-285 -342)">
    <rect id="Rectángulo_106" data-name="Rectángulo 106" width="53" height="180" transform="translate(285 342)" fill="none"/>
    <g id="Grupo_131" data-name="Grupo 131" transform="translate(298.487 358.908)">
      <g id="Grupo_46" data-name="Grupo 46" transform="translate(0)">
        <g id="Unión_22" data-name="Unión 22" transform="translate(-0.487 0.092)" fill="none">
          <path d="M1.937,29V21.435H0V0H31V21.435H15.5V29Z" stroke="none"/>
          <path d="M 14.49971008300781 28 L 14.49971008300781 21.43495941162109 L 14.49971008300781 20.43495941162109 L 15.49971008300781 20.43495941162109 L 30 20.43495941162109 L 30 1 L 1 1 L 1 20.43495941162109 L 1.937319993972778 20.43495941162109 L 2.937319993972778 20.43495941162109 L 2.937319993972778 21.43495941162109 L 2.937319993972778 28 L 14.49971008300781 28 M 15.49971008300781 29 L 1.937319993972778 29 L 1.937319993972778 21.43495941162109 L -1.77635683940025e-15 21.43495941162109 L -1.77635683940025e-15 -1.77635683940025e-15 L 31 -1.77635683940025e-15 L 31 21.43495941162109 L 15.49971008300781 21.43495941162109 L 15.49971008300781 29 Z" stroke="none"/>
        </g>
      </g>
      <text id="_4" data-name="4" transform="translate(13.513 16.092)" fontSize="12" fontFamily="HelveticaNeue, Helvetica Neue"><tspan x="-3.336" y="0">4</tspan></text>
    </g>
    <g id="Grupo_132" data-name="Grupo 132" transform="translate(298.487 399.317)">
      <g id="Grupo_46-2" data-name="Grupo 46" transform="translate(0)">
        <g id="Unión_22-2" data-name="Unión 22" transform="translate(-0.487 -0.317)" fill="none">
          <path d="M1.937,29V21.435H0V0H31V21.435H15.5V29Z" stroke="none"/>
          <path d="M 14.49971008300781 28 L 14.49971008300781 21.43495941162109 L 14.49971008300781 20.43495941162109 L 15.49971008300781 20.43495941162109 L 30 20.43495941162109 L 30 1 L 1 1 L 1 20.43495941162109 L 1.937319993972778 20.43495941162109 L 2.937319993972778 20.43495941162109 L 2.937319993972778 21.43495941162109 L 2.937319993972778 28 L 14.49971008300781 28 M 15.49971008300781 29 L 1.937319993972778 29 L 1.937319993972778 21.43495941162109 L -1.77635683940025e-15 21.43495941162109 L -1.77635683940025e-15 -1.77635683940025e-15 L 31 -1.77635683940025e-15 L 31 21.43495941162109 L 15.49971008300781 21.43495941162109 L 15.49971008300781 29 Z" stroke="none"/>
        </g>
      </g>
      <text id="_1" data-name="1" transform="translate(13.513 14.683)" fontSize="12" fontFamily="HelveticaNeue, Helvetica Neue"><tspan x="-3.336" y="0">1</tspan></text>
    </g>
    <g id="Grupo_134" data-name="Grupo 134" transform="translate(298.487 439.727)">
      <g id="Grupo_46-3" data-name="Grupo 46" transform="translate(0)">
        <g id="Unión_22-3" data-name="Unión 22" transform="translate(-0.487 0.273)" fill="none">
          <path d="M1.937,29V21.435H0V0H31V21.435H15.5V29Z" stroke="none"/>
          <path d="M 14.49971008300781 28 L 14.49971008300781 21.43495941162109 L 14.49971008300781 20.43495941162109 L 15.49971008300781 20.43495941162109 L 30 20.43495941162109 L 30 1 L 1 1 L 1 20.43495941162109 L 1.937319993972778 20.43495941162109 L 2.937319993972778 20.43495941162109 L 2.937319993972778 21.43495941162109 L 2.937319993972778 28 L 14.49971008300781 28 M 15.49971008300781 29 L 1.937319993972778 29 L 1.937319993972778 21.43495941162109 L -1.77635683940025e-15 21.43495941162109 L -1.77635683940025e-15 -1.77635683940025e-15 L 31 -1.77635683940025e-15 L 31 21.43495941162109 L 15.49971008300781 21.43495941162109 L 15.49971008300781 29 Z" stroke="none"/>
        </g>
      </g>
      <text id="_1-2" data-name="1" transform="translate(13.513 15.273)" fontSize="12" fontFamily="HelveticaNeue, Helvetica Neue"><tspan x="-3.336" y="0">1</tspan></text>
    </g>
    <g id="Grupo_135" data-name="Grupo 135" transform="translate(298.487 480.136)">
      <g id="Grupo_46-4" data-name="Grupo 46" transform="translate(0)">
        <g id="Unión_22-4" data-name="Unión 22" transform="translate(-0.487 -0.136)" fill="none">
          <path d="M1.937,29V21.435H0V0H31V21.435H15.5V29Z" stroke="none"/>
          <path d="M 14.49971008300781 28 L 14.49971008300781 21.43495941162109 L 14.49971008300781 20.43495941162109 L 15.49971008300781 20.43495941162109 L 30 20.43495941162109 L 30 1 L 1 1 L 1 20.43495941162109 L 1.937319993972778 20.43495941162109 L 2.937319993972778 20.43495941162109 L 2.937319993972778 21.43495941162109 L 2.937319993972778 28 L 14.49971008300781 28 M 15.49971008300781 29 L 1.937319993972778 29 L 1.937319993972778 21.43495941162109 L -1.77635683940025e-15 21.43495941162109 L -1.77635683940025e-15 -1.77635683940025e-15 L 31 -1.77635683940025e-15 L 31 21.43495941162109 L 15.49971008300781 21.43495941162109 L 15.49971008300781 29 Z" stroke="none"/>
        </g>
      </g>
      <text id="_1-3" data-name="1" transform="translate(13.513 13.864)" fontSize="12" fontFamily="HelveticaNeue, Helvetica Neue"><tspan x="-3.336" y="0">1</tspan></text>
    </g>
  </g>
);
case "city-plan-level-2--6":
return (
  <g id="Grupo_225" data-name="Grupo 225" transform="translate(-344 -342)">
    <rect id="Rectángulo_107" data-name="Rectángulo 107" width="53" height="180" transform="translate(344 342)" fill="none"/>
    <g id="Grupo_136" data-name="Grupo 136" transform="translate(338 309)">
      <g id="Grupo_46" data-name="Grupo 46" transform="translate(14 76)">
        <g id="Unión_22" data-name="Unión 22" transform="translate(0 0)" fill="none">
          <path d="M2.312,35V25.87H0V0H37V25.87H18.5V35Z" stroke="none"/>
          <path d="M 17.49966049194336 34 L 17.49966049194336 25.86977005004883 L 17.49966049194336 24.86977005004883 L 18.49966049194336 24.86977005004883 L 36 24.86977005004883 L 36 1 L 1 1 L 1 24.86977005004883 L 2.312279939651489 24.86977005004883 L 3.312279939651489 24.86977005004883 L 3.312279939651489 25.86977005004883 L 3.312279939651489 34 L 17.49966049194336 34 M 18.49966049194336 35 L 2.312279939651489 35 L 2.312279939651489 25.86977005004883 L 0 25.86977005004883 L 0 0 L 37 0 L 37 25.86977005004883 L 18.49966049194336 25.86977005004883 L 18.49966049194336 35 Z" stroke="none"/>
        </g>
      </g>
      <text id="_4" data-name="4" transform="translate(31 93)" fontSize="16" fontFamily="HelveticaNeue, Helvetica Neue"><tspan x="-4.448" y="0">4</tspan></text>
    </g>
    <g id="Grupo_137" data-name="Grupo 137" transform="translate(338 358)">
      <g id="Grupo_46-2" data-name="Grupo 46" transform="translate(14 76)">
        <g id="Unión_22-2" data-name="Unión 22" transform="translate(0 0)" fill="none">
          <path d="M2.312,35V25.87H0V0H37V25.87H18.5V35Z" stroke="none"/>
          <path d="M 17.49966049194336 34 L 17.49966049194336 25.86977005004883 L 17.49966049194336 24.86977005004883 L 18.49966049194336 24.86977005004883 L 36 24.86977005004883 L 36 1 L 1 1 L 1 24.86977005004883 L 2.312279939651489 24.86977005004883 L 3.312279939651489 24.86977005004883 L 3.312279939651489 25.86977005004883 L 3.312279939651489 34 L 17.49966049194336 34 M 18.49966049194336 35 L 2.312279939651489 35 L 2.312279939651489 25.86977005004883 L 0 25.86977005004883 L 0 0 L 37 0 L 37 25.86977005004883 L 18.49966049194336 25.86977005004883 L 18.49966049194336 35 Z" stroke="none"/>
        </g>
      </g>
      <text id="_5" data-name="5" transform="translate(31 93)" fontSize="16" fontFamily="HelveticaNeue, Helvetica Neue"><tspan x="-4.448" y="0">5</tspan></text>
    </g>
  </g>
);
case "city-plan-level-2--7":
return (
  <g id="Grupo_226" data-name="Grupo 226" transform="translate(-403 -342)">
  <rect id="Rectángulo_117" data-name="Rectángulo 117" width="53" height="180" transform="translate(403 342)" fill="none"/>
  <g id="Grupo_165" data-name="Grupo 165" transform="translate(-193 246)">
    <g id="Grupo_90" data-name="Grupo 90" transform="translate(603.195 162.834)">
      <g id="Grupo_84" data-name="Grupo 84" transform="translate(0 0)">
        <g id="Grupo_46" data-name="Grupo 46" transform="translate(0 0)">
          <g id="Unión_22" data-name="Unión 22" transform="translate(-0.195 0.166)" fill="#fff">
            <path d="M 4.249919891357422 7.75 L 0.8124499917030334 7.75 L 0.8124499917030334 5.913090229034424 L 0.8124499917030334 5.663090229034424 L 0.5624499917030334 5.663090229034424 L 0.25 5.663090229034424 L 0.25 0.25 L 8.75 0.25 L 8.75 5.663090229034424 L 4.499919891357422 5.663090229034424 L 4.249919891357422 5.663090229034424 L 4.249919891357422 5.913090229034424 L 4.249919891357422 7.75 Z" stroke="none"/>
            <path d="M 3.999919891357422 7.5 L 3.999919891357422 5.913090229034424 L 3.999919891357422 5.413090229034424 L 4.499919891357422 5.413090229034424 L 8.5 5.413090229034424 L 8.5 0.5 L 0.5 0.5 L 0.5 5.413090229034424 L 0.5624499917030334 5.413090229034424 L 1.062450051307678 5.413090229034424 L 1.062450051307678 5.913090229034424 L 1.062450051307678 7.5 L 3.999919891357422 7.5 M 4.499919891357422 8 L 0.5624499917030334 8 L 0.5624499917030334 5.913090229034424 L 0 5.913090229034424 L 0 0 L 9 0 L 9 5.913090229034424 L 4.499919891357422 5.913090229034424 L 4.499919891357422 8 Z" stroke="none"/>
          </g>
        </g>
      </g>
    </g>
    <g id="Grupo_93" data-name="Grupo 93" transform="translate(603.195 177.956)">
      <g id="Grupo_84-2" data-name="Grupo 84" transform="translate(0 0)">
        <g id="Grupo_46-2" data-name="Grupo 46" transform="translate(0 0)">
          <g id="Unión_22-2" data-name="Unión 22" transform="translate(-0.195 0.044)" fill="#fff">
            <path d="M 4.249919891357422 7.75 L 0.8124499917030334 7.75 L 0.8124499917030334 5.913090229034424 L 0.8124499917030334 5.663090229034424 L 0.5624499917030334 5.663090229034424 L 0.25 5.663090229034424 L 0.25 0.25 L 8.75 0.25 L 8.75 5.663090229034424 L 4.499919891357422 5.663090229034424 L 4.249919891357422 5.663090229034424 L 4.249919891357422 5.913090229034424 L 4.249919891357422 7.75 Z" stroke="none"/>
            <path d="M 3.999919891357422 7.5 L 3.999919891357422 5.913090229034424 L 3.999919891357422 5.413090229034424 L 4.499919891357422 5.413090229034424 L 8.5 5.413090229034424 L 8.5 0.5 L 0.5 0.5 L 0.5 5.413090229034424 L 0.5624499917030334 5.413090229034424 L 1.062450051307678 5.413090229034424 L 1.062450051307678 5.913090229034424 L 1.062450051307678 7.5 L 3.999919891357422 7.5 M 4.499919891357422 8 L 0.5624499917030334 8 L 0.5624499917030334 5.913090229034424 L 0 5.913090229034424 L 0 0 L 9 0 L 9 5.913090229034424 L 4.499919891357422 5.913090229034424 L 4.499919891357422 8 Z" stroke="none"/>
          </g>
        </g>
      </g>
    </g>
    <g id="Grupo_96" data-name="Grupo 96" transform="translate(603.195 193.079)">
      <g id="Grupo_84-3" data-name="Grupo 84" transform="translate(0 0)">
        <g id="Grupo_46-3" data-name="Grupo 46" transform="translate(0 0)">
          <g id="Unión_22-3" data-name="Unión 22" transform="translate(-0.195 -0.079)" fill="#d6d6d6">
            <path d="M 4.249919891357422 7.75 L 0.8124499917030334 7.75 L 0.8124499917030334 5.913090229034424 L 0.8124499917030334 5.663090229034424 L 0.5624499917030334 5.663090229034424 L 0.25 5.663090229034424 L 0.25 0.25 L 8.75 0.25 L 8.75 5.663090229034424 L 4.499919891357422 5.663090229034424 L 4.249919891357422 5.663090229034424 L 4.249919891357422 5.913090229034424 L 4.249919891357422 7.75 Z" stroke="none"/>
            <path d="M 3.999919891357422 7.5 L 3.999919891357422 5.913090229034424 L 3.999919891357422 5.413090229034424 L 4.499919891357422 5.413090229034424 L 8.5 5.413090229034424 L 8.5 0.5 L 0.5 0.5 L 0.5 5.413090229034424 L 0.5624499917030334 5.413090229034424 L 1.062450051307678 5.413090229034424 L 1.062450051307678 5.913090229034424 L 1.062450051307678 7.5 L 3.999919891357422 7.5 M 4.499919891357422 8 L 0.5624499917030334 8 L 0.5624499917030334 5.913090229034424 L 0 5.913090229034424 L 0 0 L 9 0 L 9 5.913090229034424 L 4.499919891357422 5.913090229034424 L 4.499919891357422 8 Z" stroke="none"/>
          </g>
        </g>
      </g>
    </g>
    <path id="Polígono_2" data-name="Polígono 2" d="M1.5,0,3,2H0Z" transform="translate(601.5 194.5) rotate(90)"/>
  </g>
  <g id="Grupo_60" data-name="Grupo 60" transform="translate(-1343.896 813)">
    <path id="Trazado_88" data-name="Trazado 88" d="M1587.866-590.918c-.009.176,2.228-2.255,9.77,0,.249.074.494.143.759.214,7.069,1.876,11.2-.518,11.837-1.467.656-.982-2.514,2.407-9.18-.535S1587.874-591.094,1587.866-590.918Z" transform="translate(180.58 225.337)" fill="#37c837"/>
    <g id="Grupo_60-2" data-name="Grupo 60" transform="translate(1780.341 -375.995)">
      <path id="path977-5-8" d="M-51.621,326.65H-48.4" transform="translate(53.209 -316.985)" fill="none" stroke="#241f1c" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.4"/>
      <path id="path979-8-6-6-8-5-7-2-3-7" d="M-49.04,320.686l-.022-6.147h.717l.042,6.142Z" transform="translate(51.949 -311.021)" fill="#784421" stroke="#241f1c" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.4"/>
      <ellipse id="path837-1-2-8-9-4" cx="2.309" cy="2.219" rx="2.309" ry="2.219" strokeWidth="0.4" transform="translate(0 3.339)" stroke="rgba(36,31,28,0.99)" strokeLinecap="round" strokeLinejoin="round" fill="#5fd35f"/>
      <ellipse id="ellipse9017" cx="3.53" cy="3.393" rx="3.53" ry="3.393" strokeWidth="0.4" transform="translate(0.951)" stroke="rgba(36,31,28,0.99)" strokeLinecap="round" strokeLinejoin="round" fill="#37c837"/>
    </g>
    <g id="Grupo_61" data-name="Grupo 61" transform="translate(1771.098 -383.585)">
      <ellipse id="path4729" cx="2.726" cy="2.53" rx="2.726" ry="2.53" strokeWidth="0.4" transform="translate(1.902 6.202)" stroke="#241f1c" strokeLinecap="round" strokeLinejoin="round" fill="#2ca02c"/>
      <path id="path979-8-6-6-8-5-7" d="M-13.286,399.612l-.039-10.918h1.273l.075,10.909Z" transform="translate(19.344 -383.119)" fill="#784421" stroke="#241f1c" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.4"/>
      <ellipse id="path4729-7" cx="3.655" cy="3.391" rx="3.655" ry="3.391" strokeWidth="0.4" transform="translate(0 1.58)" stroke="#241f1c" strokeLinecap="round" strokeLinejoin="round" fill="#37c837"/>
      <ellipse id="path4729-7-7" cx="3.655" cy="3.391" rx="3.655" ry="3.391" strokeWidth="0.4" transform="translate(4.214)" stroke="#241f1c" strokeLinecap="round" strokeLinejoin="round" fill="#5fd35f"/>
      <path id="path977-8-5-8-2-0" d="M-14.931,400.952h4.237" transform="translate(19.503 -384.326)" fill="none" stroke="#241f1c" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.4"/>
      <ellipse id="path4729-7-7-7" cx="2.637" cy="2.447" rx="2.637" ry="2.447" strokeWidth="0.4" transform="translate(7.41 5.544)" stroke="#241f1c" strokeLinecap="round" strokeLinejoin="round" fill="#37c837"/>
    </g>
  </g>
  <g id="Grupo_166" data-name="Grupo 166" transform="translate(204.007 880.24)">
    <path id="Trazado_7" data-name="Trazado 7" d="M215.08-407.592l-3.085-12.442,21.61,6.456-2.958,5.685Z" transform="translate(9 -54)" fill="#8dd1e4"/>
    <g id="Grupo_5" data-name="Grupo 5" transform="translate(230.078 -467.034)">
      <ellipse id="Elipse_10" data-name="Elipse 10" cx="7" cy="2.5" rx="7" ry="2.5" transform="translate(-0.085 1.793)" fill="#388caf"/>
      <ellipse id="Elipse_11" data-name="Elipse 11" cx="7" cy="2.5" rx="7" ry="2.5" transform="translate(-0.085 1.793)" fill="#5abce6"/>
      <g id="Elipse_12" data-name="Elipse 12" transform="translate(-0.085 1.793)" fill="none" stroke="#b4d6c8" strokeWidth="0.4">
        <ellipse cx="7" cy="2.5" rx="7" ry="2.5" stroke="none"/>
        <ellipse cx="7" cy="2.5" rx="6.8" ry="2.3" fill="none"/>
      </g>
      <path id="Trazado_4" data-name="Trazado 4" d="M249.153-389.013V-393.7" transform="translate(-246.195 394.598)" fill="none" stroke="#75c3e4" strokeWidth="0.4"/>
      <line id="Línea_2" data-name="Línea 2" x2="2.099" transform="translate(3.062 4.134)" fill="none" stroke="#75c3e4" strokeWidth="0.4"/>
      <line id="Línea_3" data-name="Línea 3" y1="4.494" transform="translate(5.161 0.955)" fill="none" stroke="#75c3e4" strokeWidth="0.4"/>
      <line id="Línea_4" data-name="Línea 4" x2="2.099" transform="translate(3.062 2.88)" fill="none" stroke="#75c3e4" strokeWidth="0.4"/>
      <line id="Línea_5" data-name="Línea 5" y1="1.499" transform="translate(1.563 0.955)" fill="none" stroke="#388caf" strokeWidth="0.4"/>
      <line id="Línea_6" data-name="Línea 6" y1="1.499" transform="translate(3.662 0.655)" fill="none" stroke="#388caf" strokeWidth="0.4"/>
      <path id="Trazado_5" data-name="Trazado 5" d="M244.508-395.069v.038l.023-.294a.737.737,0,0,1,.666-.362.68.68,0,0,1,.7.656" transform="translate(-242.942 395.986)" fill="none" stroke="#75c3e4" strokeWidth="0.4"/>
      <path id="Trazado_6" data-name="Trazado 6" d="M244.491-395.092v.059a.41.41,0,0,1,.046-.244.737.737,0,0,1,.659-.409.851.851,0,0,1,.784.84c.009.019.019.312.019.312" transform="translate(-240.829 395.686)" fill="none" stroke="#75c3e4" strokeWidth="0.4"/>
    </g>
    <g id="Grupo_14" data-name="Grupo 14" transform="translate(225.248 -470.204)">
      <path id="Unión_2" data-name="Unión 2" d="M2.106,8.388A2.249,2.249,0,0,1,3.663,7.8L3.327,3a1.577,1.577,0,0,0-1.538.388c0,.005,0,.012,0,.018L1.781,3.4l-.012.013a.2.2,0,0,0,0-.023A1.37,1.37,0,0,0,0,3.74,3.845,3.845,0,0,1,3.326.008L3.341,0,3.36.006A3.843,3.843,0,0,1,7.346,2.845a1.337,1.337,0,0,0-1.769.077l0,.026a1.734,1.734,0,0,0-1.943.184l.325,4.655a2.463,2.463,0,0,1,1.82.6H2.106ZM3.637,3.126s0,0,0,0Z" transform="translate(0.349 0.385)" fill="none" stroke="#b4d6c8" strokeWidth="0.4"/>
      <rect id="Rectángulo_19" data-name="Rectángulo 19" width="0.3" height="5.397" transform="matrix(0.998, -0.07, 0.07, 0.998, 3.656, 3.093)" fill="#85afbe"/>
      <path id="Sustracción_1" data-name="Sustracción 1" d="M3.676.6H0A2.475,2.475,0,0,1,1.838,0,2.476,2.476,0,0,1,3.676.6Z" transform="translate(2.456 8.173)" fill="#3289ad"/>
      <g id="Grupo_12" data-name="Grupo 12" transform="matrix(0.995, -0.105, 0.105, 0.995, 0, 0.773)">
        <path id="Trazado_28" data-name="Trazado 28" d="M3.718,0A3.848,3.848,0,0,0,0,3.367a1.365,1.365,0,0,1,1.813-.143A3.483,3.483,0,0,1,3.718,0Z" transform="translate(0 0.005)" fill="#388caf"/>
        <path id="Trazado_29" data-name="Trazado 29" d="M.9.6A3.439,3.439,0,0,1,1.917,3.137a1.335,1.335,0,0,1,1.769.105A3.848,3.848,0,0,0,0,0,3.642,3.642,0,0,1,.9.6Z" transform="translate(3.711 0.006)" fill="#388caf"/>
        <path id="Trazado_30" data-name="Trazado 30" d="M3.838,3.166A3.464,3.464,0,0,0,2.913.7,3.126,3.126,0,0,0,1.919,0,3.059,3.059,0,0,0,.925.7,3.488,3.488,0,0,0,0,3.232a1.5,1.5,0,0,1,1.868-.066c0,.159-.012.046,0,0s.04-.042,0,0A1.718,1.718,0,0,1,3.838,3.166Z" transform="translate(1.791 0)" fill="#d9eff7"/>
      </g>
    </g>
  </g>
</g>
);
case "city-plan-level-2--8":
return (
  <g id="Grupo_227" data-name="Grupo 227" transform="translate(-464 -342)">
  <rect id="Rectángulo_118" data-name="Rectángulo 118" width="53" height="180" transform="translate(464 342)" fill="none"/>
  <g id="Grupo_169" data-name="Grupo 169" transform="translate(473.678 433.589)">
    <path id="Trazado_88" data-name="Trazado 88" d="M1587.866-589.451c-.013.269,3.405-3.447,14.936,0,.38.113.755.219,1.161.327,10.807,2.867,17.127-.791,18.1-2.243,1-1.5-3.843,3.68-14.033-.818S1587.879-589.72,1587.866-589.451Z" transform="translate(-1587.866 616.974)" fill="#37c837"/>
    <g id="Grupo_60" data-name="Grupo 60" transform="translate(18.185 11.603)">
      <path id="path977-5-8" d="M-51.621,326.65h4.92" transform="translate(54.049 -311.874)" fill="none" stroke="#241f1c" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.4"/>
      <path id="path979-8-6-6-8-5-7-2-3-7" d="M-49.028,323.936l-.033-9.4h1.1l.064,9.389Z" transform="translate(53.475 -309.16)" fill="#784421" stroke="#241f1c" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.4"/>
      <ellipse id="path837-1-2-8-9-4" cx="3.53" cy="3.393" rx="3.53" ry="3.393" strokeWidth="0.4" transform="translate(0 5.105)" stroke="rgba(36,31,28,0.99)" strokeLinecap="round" strokeLinejoin="round" fill="#5fd35f"/>
      <ellipse id="ellipse9017" cx="5.397" cy="5.187" rx="5.397" ry="5.187" strokeWidth="0.4" transform="translate(1.454)" stroke="rgba(36,31,28,0.99)" strokeLinecap="round" strokeLinejoin="round" fill="#37c837"/>
    </g>
    <g id="Grupo_61" data-name="Grupo 61" transform="translate(4.056 0)">
      <ellipse id="path4729" cx="4.168" cy="3.868" rx="4.168" ry="3.868" strokeWidth="0.4" transform="translate(2.908 9.481)" stroke="#241f1c" strokeLinecap="round" strokeLinejoin="round" fill="#2ca02c"/>
      <path id="path979-8-6-6-8-5-7" d="M-13.265,405.386l-.059-16.692h1.947l.114,16.678Z" transform="translate(22.527 -380.172)" fill="#784421" stroke="#241f1c" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.4"/>
      <ellipse id="path4729-7" cx="5.587" cy="5.184" rx="5.587" ry="5.184" strokeWidth="0.4" transform="translate(0 2.416)" stroke="#241f1c" strokeLinecap="round" strokeLinejoin="round" fill="#37c837"/>
      <ellipse id="path4729-7-7" cx="5.587" cy="5.184" rx="5.587" ry="5.184" strokeWidth="0.4" transform="translate(6.443)" stroke="#241f1c" strokeLinecap="round" strokeLinejoin="round" fill="#5fd35f"/>
      <path id="path977-8-5-8-2-0" d="M-14.931,400.952h6.478" transform="translate(21.92 -375.535)" fill="none" stroke="#241f1c" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.4"/>
      <ellipse id="path4729-7-7-7" cx="4.031" cy="3.74" rx="4.031" ry="3.74" strokeWidth="0.4" transform="translate(11.329 8.475)" stroke="#241f1c" strokeLinecap="round" strokeLinejoin="round" fill="#37c837"/>
    </g>
  </g>
  <g id="Grupo_170" data-name="Grupo 170" transform="translate(473.678 377.025)">
    <path id="Trazado_88-2" data-name="Trazado 88" d="M1587.866-589.451c-.013.269,3.405-3.447,14.936,0,.38.113.755.219,1.161.327,10.807,2.867,17.127-.791,18.1-2.243,1-1.5-3.843,3.68-14.033-.818S1587.879-589.72,1587.866-589.451Z" transform="translate(-1587.866 616.974)" fill="#37c837"/>
    <g id="Grupo_60-2" data-name="Grupo 60" transform="translate(18.185 11.603)">
      <path id="path977-5-8-2" data-name="path977-5-8" d="M-51.621,326.65h4.92" transform="translate(54.049 -311.874)" fill="none" stroke="#241f1c" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.4"/>
      <path id="path979-8-6-6-8-5-7-2-3-7-2" data-name="path979-8-6-6-8-5-7-2-3-7" d="M-49.028,323.936l-.033-9.4h1.1l.064,9.389Z" transform="translate(53.475 -309.16)" fill="#784421" stroke="#241f1c" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.4"/>
      <ellipse id="path837-1-2-8-9-4-2" data-name="path837-1-2-8-9-4" cx="3.53" cy="3.393" rx="3.53" ry="3.393" transform="translate(0 5.105)" fill="#5fd35f" stroke="rgba(36,31,28,0.99)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.4"/>
      <ellipse id="ellipse9017-2" data-name="ellipse9017" cx="5.397" cy="5.187" rx="5.397" ry="5.187" transform="translate(1.454)" fill="#37c837" stroke="rgba(36,31,28,0.99)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.4"/>
    </g>
    <g id="Grupo_61-2" data-name="Grupo 61" transform="translate(4.056)">
      <ellipse id="path4729-2" data-name="path4729" cx="4.168" cy="3.868" rx="4.168" ry="3.868" transform="translate(2.908 9.481)" fill="#2ca02c" stroke="#241f1c" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.4"/>
      <path id="path979-8-6-6-8-5-7-2" data-name="path979-8-6-6-8-5-7" d="M-13.265,405.386l-.059-16.692h1.947l.114,16.678Z" transform="translate(22.527 -380.172)" fill="#784421" stroke="#241f1c" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.4"/>
      <ellipse id="path4729-7-2" data-name="path4729-7" cx="5.587" cy="5.184" rx="5.587" ry="5.184" transform="translate(0 2.416)" fill="#37c837" stroke="#241f1c" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.4"/>
      <ellipse id="path4729-7-7-2" data-name="path4729-7-7" cx="5.587" cy="5.184" rx="5.587" ry="5.184" transform="translate(6.443)" fill="#5fd35f" stroke="#241f1c" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.4"/>
      <path id="path977-8-5-8-2-0-2" data-name="path977-8-5-8-2-0" d="M-14.931,400.952h6.478" transform="translate(21.92 -375.535)" fill="none" stroke="#241f1c" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.4"/>
      <ellipse id="path4729-7-7-7-2" data-name="path4729-7-7-7" cx="4.031" cy="3.74" rx="4.031" ry="3.74" transform="translate(11.329 8.475)" fill="#37c837" stroke="#241f1c" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.4"/>
    </g>
  </g>
  <g id="Grupo_171" data-name="Grupo 171" transform="translate(471.195 469.079)">
    <g id="Grupo_84" data-name="Grupo 84" transform="translate(0 0)">
      <g id="Grupo_46" data-name="Grupo 46" transform="translate(0 0)">
        <g id="Unión_22" data-name="Unión 22" transform="translate(-0.195 -0.079)" fill="#d6d6d6">
          <path d="M 4.249919891357422 7.75 L 0.8124499917030334 7.75 L 0.8124499917030334 5.913090229034424 L 0.8124499917030334 5.663090229034424 L 0.5624499917030334 5.663090229034424 L 0.25 5.663090229034424 L 0.25 0.25 L 8.75 0.25 L 8.75 5.663090229034424 L 4.499919891357422 5.663090229034424 L 4.249919891357422 5.663090229034424 L 4.249919891357422 5.913090229034424 L 4.249919891357422 7.75 Z" stroke="none"/>
          <path d="M 3.999919891357422 7.5 L 3.999919891357422 5.913090229034424 L 3.999919891357422 5.413090229034424 L 4.499919891357422 5.413090229034424 L 8.5 5.413090229034424 L 8.5 0.5 L 0.5 0.5 L 0.5 5.413090229034424 L 0.5624499917030334 5.413090229034424 L 1.062450051307678 5.413090229034424 L 1.062450051307678 5.913090229034424 L 1.062450051307678 7.5 L 3.999919891357422 7.5 M 4.499919891357422 8 L 0.5624499917030334 8 L 0.5624499917030334 5.913090229034424 L 0 5.913090229034424 L 0 0 L 9 0 L 9 5.913090229034424 L 4.499919891357422 5.913090229034424 L 4.499919891357422 8 Z" stroke="none"/>
        </g>
      </g>
    </g>
  </g>
  <g id="Grupo_172" data-name="Grupo 172" transform="translate(481.195 469.079)">
    <g id="Grupo_84-2" data-name="Grupo 84" transform="translate(0 0)">
      <g id="Grupo_46-2" data-name="Grupo 46" transform="translate(0 0)">
        <g id="Unión_22-2" data-name="Unión 22" transform="translate(-0.195 -0.079)" fill="#d6d6d6">
          <path d="M 4.249919891357422 7.75 L 0.8124499917030334 7.75 L 0.8124499917030334 5.913090229034424 L 0.8124499917030334 5.663090229034424 L 0.5624499917030334 5.663090229034424 L 0.25 5.663090229034424 L 0.25 0.25 L 8.75 0.25 L 8.75 5.663090229034424 L 4.499919891357422 5.663090229034424 L 4.249919891357422 5.663090229034424 L 4.249919891357422 5.913090229034424 L 4.249919891357422 7.75 Z" stroke="none"/>
          <path d="M 3.999919891357422 7.5 L 3.999919891357422 5.913090229034424 L 3.999919891357422 5.413090229034424 L 4.499919891357422 5.413090229034424 L 8.5 5.413090229034424 L 8.5 0.5 L 0.5 0.5 L 0.5 5.413090229034424 L 0.5624499917030334 5.413090229034424 L 1.062450051307678 5.413090229034424 L 1.062450051307678 5.913090229034424 L 1.062450051307678 7.5 L 3.999919891357422 7.5 M 4.499919891357422 8 L 0.5624499917030334 8 L 0.5624499917030334 5.913090229034424 L 0 5.913090229034424 L 0 0 L 9 0 L 9 5.913090229034424 L 4.499919891357422 5.913090229034424 L 4.499919891357422 8 Z" stroke="none"/>
        </g>
      </g>
    </g>
  </g>
  <g id="Grupo_173" data-name="Grupo 173" transform="translate(491.195 469.079)">
    <g id="Grupo_84-3" data-name="Grupo 84" transform="translate(0 0)">
      <g id="Grupo_46-3" data-name="Grupo 46" transform="translate(0 0)">
        <g id="Unión_22-3" data-name="Unión 22" transform="translate(-0.195 -0.079)" fill="#d6d6d6">
          <path d="M 4.249919891357422 7.75 L 0.8124499917030334 7.75 L 0.8124499917030334 5.913090229034424 L 0.8124499917030334 5.663090229034424 L 0.5624499917030334 5.663090229034424 L 0.25 5.663090229034424 L 0.25 0.25 L 8.75 0.25 L 8.75 5.663090229034424 L 4.499919891357422 5.663090229034424 L 4.249919891357422 5.663090229034424 L 4.249919891357422 5.913090229034424 L 4.249919891357422 7.75 Z" stroke="none"/>
          <path d="M 3.999919891357422 7.5 L 3.999919891357422 5.913090229034424 L 3.999919891357422 5.413090229034424 L 4.499919891357422 5.413090229034424 L 8.5 5.413090229034424 L 8.5 0.5 L 0.5 0.5 L 0.5 5.413090229034424 L 0.5624499917030334 5.413090229034424 L 1.062450051307678 5.413090229034424 L 1.062450051307678 5.913090229034424 L 1.062450051307678 7.5 L 3.999919891357422 7.5 M 4.499919891357422 8 L 0.5624499917030334 8 L 0.5624499917030334 5.913090229034424 L 0 5.913090229034424 L 0 0 L 9 0 L 9 5.913090229034424 L 4.499919891357422 5.913090229034424 L 4.499919891357422 8 Z" stroke="none"/>
        </g>
      </g>
    </g>
  </g>
  <g id="Grupo_174" data-name="Grupo 174" transform="translate(501.195 469.079)">
    <g id="Grupo_84-4" data-name="Grupo 84" transform="translate(0 0)">
      <g id="Grupo_46-4" data-name="Grupo 46" transform="translate(0 0)">
        <g id="Unión_22-4" data-name="Unión 22" transform="translate(-0.195 -0.079)" fill="#d6d6d6">
          <path d="M 4.249919891357422 7.75 L 0.8124499917030334 7.75 L 0.8124499917030334 5.913090229034424 L 0.8124499917030334 5.663090229034424 L 0.5624499917030334 5.663090229034424 L 0.25 5.663090229034424 L 0.25 0.25 L 8.75 0.25 L 8.75 5.663090229034424 L 4.499919891357422 5.663090229034424 L 4.249919891357422 5.663090229034424 L 4.249919891357422 5.913090229034424 L 4.249919891357422 7.75 Z" stroke="none"/>
          <path d="M 3.999919891357422 7.5 L 3.999919891357422 5.913090229034424 L 3.999919891357422 5.413090229034424 L 4.499919891357422 5.413090229034424 L 8.5 5.413090229034424 L 8.5 0.5 L 0.5 0.5 L 0.5 5.413090229034424 L 0.5624499917030334 5.413090229034424 L 1.062450051307678 5.413090229034424 L 1.062450051307678 5.913090229034424 L 1.062450051307678 7.5 L 3.999919891357422 7.5 M 4.499919891357422 8 L 0.5624499917030334 8 L 0.5624499917030334 5.913090229034424 L 0 5.913090229034424 L 0 0 L 9 0 L 9 5.913090229034424 L 4.499919891357422 5.913090229034424 L 4.499919891357422 8 Z" stroke="none"/>
        </g>
      </g>
    </g>
  </g>
  <g id="Grupo_175" data-name="Grupo 175" transform="translate(471.195 408.079)">
    <g id="Grupo_84-5" data-name="Grupo 84" transform="translate(0 0)">
      <g id="Grupo_46-5" data-name="Grupo 46" transform="translate(0 0)">
        <g id="Unión_22-5" data-name="Unión 22" transform="translate(-0.195 -0.079)" fill="#d6d6d6">
          <path d="M 4.249919891357422 7.75 L 0.8124499917030334 7.75 L 0.8124499917030334 5.913090229034424 L 0.8124499917030334 5.663090229034424 L 0.5624499917030334 5.663090229034424 L 0.25 5.663090229034424 L 0.25 0.25 L 8.75 0.25 L 8.75 5.663090229034424 L 4.499919891357422 5.663090229034424 L 4.249919891357422 5.663090229034424 L 4.249919891357422 5.913090229034424 L 4.249919891357422 7.75 Z" stroke="none"/>
          <path d="M 3.999919891357422 7.5 L 3.999919891357422 5.913090229034424 L 3.999919891357422 5.413090229034424 L 4.499919891357422 5.413090229034424 L 8.5 5.413090229034424 L 8.5 0.5 L 0.5 0.5 L 0.5 5.413090229034424 L 0.5624499917030334 5.413090229034424 L 1.062450051307678 5.413090229034424 L 1.062450051307678 5.913090229034424 L 1.062450051307678 7.5 L 3.999919891357422 7.5 M 4.499919891357422 8 L 0.5624499917030334 8 L 0.5624499917030334 5.913090229034424 L 0 5.913090229034424 L 0 0 L 9 0 L 9 5.913090229034424 L 4.499919891357422 5.913090229034424 L 4.499919891357422 8 Z" stroke="none"/>
        </g>
      </g>
    </g>
  </g>
  <g id="Grupo_176" data-name="Grupo 176" transform="translate(481.195 408.079)">
    <g id="Grupo_84-6" data-name="Grupo 84" transform="translate(0 0)">
      <g id="Grupo_46-6" data-name="Grupo 46" transform="translate(0 0)">
        <g id="Unión_22-6" data-name="Unión 22" transform="translate(-0.195 -0.079)" fill="#d6d6d6">
          <path d="M 4.249919891357422 7.75 L 0.8124499917030334 7.75 L 0.8124499917030334 5.913090229034424 L 0.8124499917030334 5.663090229034424 L 0.5624499917030334 5.663090229034424 L 0.25 5.663090229034424 L 0.25 0.25 L 8.75 0.25 L 8.75 5.663090229034424 L 4.499919891357422 5.663090229034424 L 4.249919891357422 5.663090229034424 L 4.249919891357422 5.913090229034424 L 4.249919891357422 7.75 Z" stroke="none"/>
          <path d="M 3.999919891357422 7.5 L 3.999919891357422 5.913090229034424 L 3.999919891357422 5.413090229034424 L 4.499919891357422 5.413090229034424 L 8.5 5.413090229034424 L 8.5 0.5 L 0.5 0.5 L 0.5 5.413090229034424 L 0.5624499917030334 5.413090229034424 L 1.062450051307678 5.413090229034424 L 1.062450051307678 5.913090229034424 L 1.062450051307678 7.5 L 3.999919891357422 7.5 M 4.499919891357422 8 L 0.5624499917030334 8 L 0.5624499917030334 5.913090229034424 L 0 5.913090229034424 L 0 0 L 9 0 L 9 5.913090229034424 L 4.499919891357422 5.913090229034424 L 4.499919891357422 8 Z" stroke="none"/>
        </g>
      </g>
    </g>
  </g>
  <g id="Grupo_177" data-name="Grupo 177" transform="translate(491.195 408.079)">
    <g id="Grupo_84-7" data-name="Grupo 84" transform="translate(0 0)">
      <g id="Grupo_46-7" data-name="Grupo 46" transform="translate(0 0)">
        <g id="Unión_22-7" data-name="Unión 22" transform="translate(-0.195 -0.079)" fill="#d6d6d6">
          <path d="M 4.249919891357422 7.75 L 0.8124499917030334 7.75 L 0.8124499917030334 5.913090229034424 L 0.8124499917030334 5.663090229034424 L 0.5624499917030334 5.663090229034424 L 0.25 5.663090229034424 L 0.25 0.25 L 8.75 0.25 L 8.75 5.663090229034424 L 4.499919891357422 5.663090229034424 L 4.249919891357422 5.663090229034424 L 4.249919891357422 5.913090229034424 L 4.249919891357422 7.75 Z" stroke="none"/>
          <path d="M 3.999919891357422 7.5 L 3.999919891357422 5.913090229034424 L 3.999919891357422 5.413090229034424 L 4.499919891357422 5.413090229034424 L 8.5 5.413090229034424 L 8.5 0.5 L 0.5 0.5 L 0.5 5.413090229034424 L 0.5624499917030334 5.413090229034424 L 1.062450051307678 5.413090229034424 L 1.062450051307678 5.913090229034424 L 1.062450051307678 7.5 L 3.999919891357422 7.5 M 4.499919891357422 8 L 0.5624499917030334 8 L 0.5624499917030334 5.913090229034424 L 0 5.913090229034424 L 0 0 L 9 0 L 9 5.913090229034424 L 4.499919891357422 5.913090229034424 L 4.499919891357422 8 Z" stroke="none"/>
        </g>
      </g>
    </g>
  </g>
  <g id="Grupo_178" data-name="Grupo 178" transform="translate(501.195 408.079)">
    <g id="Grupo_84-8" data-name="Grupo 84" transform="translate(0 0)">
      <g id="Grupo_46-8" data-name="Grupo 46" transform="translate(0 0)">
        <g id="Unión_22-8" data-name="Unión 22" transform="translate(-0.195 -0.079)" fill="#d6d6d6">
          <path d="M 4.249919891357422 7.75 L 0.8124499917030334 7.75 L 0.8124499917030334 5.913090229034424 L 0.8124499917030334 5.663090229034424 L 0.5624499917030334 5.663090229034424 L 0.25 5.663090229034424 L 0.25 0.25 L 8.75 0.25 L 8.75 5.663090229034424 L 4.499919891357422 5.663090229034424 L 4.249919891357422 5.663090229034424 L 4.249919891357422 5.913090229034424 L 4.249919891357422 7.75 Z" stroke="none"/>
          <path d="M 3.999919891357422 7.5 L 3.999919891357422 5.913090229034424 L 3.999919891357422 5.413090229034424 L 4.499919891357422 5.413090229034424 L 8.5 5.413090229034424 L 8.5 0.5 L 0.5 0.5 L 0.5 5.413090229034424 L 0.5624499917030334 5.413090229034424 L 1.062450051307678 5.413090229034424 L 1.062450051307678 5.913090229034424 L 1.062450051307678 7.5 L 3.999919891357422 7.5 M 4.499919891357422 8 L 0.5624499917030334 8 L 0.5624499917030334 5.913090229034424 L 0 5.913090229034424 L 0 0 L 9 0 L 9 5.913090229034424 L 4.499919891357422 5.913090229034424 L 4.499919891357422 8 Z" stroke="none"/>
        </g>
      </g>
    </g>
  </g>
</g>
);
case "city-plan-level-2--9":
return (
  <g id="Grupo_228" data-name="Grupo 228" transform="translate(-522 -342)">
  <rect id="Rectángulo_119" data-name="Rectángulo 119" width="53" height="180" transform="translate(522 342)" fill="none"/>
  <g id="Grupo_180" data-name="Grupo 180" transform="translate(-74 246)">
    <g id="Grupo_90" data-name="Grupo 90" transform="translate(603.195 162.834)">
      <g id="Grupo_84" data-name="Grupo 84" transform="translate(0 0)">
        <g id="Grupo_46" data-name="Grupo 46" transform="translate(0 0)">
          <g id="Unión_22" data-name="Unión 22" transform="translate(-0.195 0.166)" fill="#fff">
            <path d="M 4.249919891357422 7.75 L 0.8124499917030334 7.75 L 0.8124499917030334 5.913090229034424 L 0.8124499917030334 5.663090229034424 L 0.5624499917030334 5.663090229034424 L 0.25 5.663090229034424 L 0.25 0.25 L 8.75 0.25 L 8.75 5.663090229034424 L 4.499919891357422 5.663090229034424 L 4.249919891357422 5.663090229034424 L 4.249919891357422 5.913090229034424 L 4.249919891357422 7.75 Z" stroke="none"/>
            <path d="M 3.999919891357422 7.5 L 3.999919891357422 5.913090229034424 L 3.999919891357422 5.413090229034424 L 4.499919891357422 5.413090229034424 L 8.5 5.413090229034424 L 8.5 0.5 L 0.5 0.5 L 0.5 5.413090229034424 L 0.5624499917030334 5.413090229034424 L 1.062450051307678 5.413090229034424 L 1.062450051307678 5.913090229034424 L 1.062450051307678 7.5 L 3.999919891357422 7.5 M 4.499919891357422 8 L 0.5624499917030334 8 L 0.5624499917030334 5.913090229034424 L 0 5.913090229034424 L 0 0 L 9 0 L 9 5.913090229034424 L 4.499919891357422 5.913090229034424 L 4.499919891357422 8 Z" stroke="none"/>
          </g>
        </g>
      </g>
    </g>
    <g id="Grupo_93" data-name="Grupo 93" transform="translate(603.195 177.956)">
      <g id="Grupo_84-2" data-name="Grupo 84" transform="translate(0 0)">
        <g id="Grupo_46-2" data-name="Grupo 46" transform="translate(0 0)">
          <g id="Unión_22-2" data-name="Unión 22" transform="translate(-0.195 0.044)" fill="#d6d6d6">
            <path d="M 4.249919891357422 7.75 L 0.8124499917030334 7.75 L 0.8124499917030334 5.913090229034424 L 0.8124499917030334 5.663090229034424 L 0.5624499917030334 5.663090229034424 L 0.25 5.663090229034424 L 0.25 0.25 L 8.75 0.25 L 8.75 5.663090229034424 L 4.499919891357422 5.663090229034424 L 4.249919891357422 5.663090229034424 L 4.249919891357422 5.913090229034424 L 4.249919891357422 7.75 Z" stroke="none"/>
            <path d="M 3.999919891357422 7.5 L 3.999919891357422 5.913090229034424 L 3.999919891357422 5.413090229034424 L 4.499919891357422 5.413090229034424 L 8.5 5.413090229034424 L 8.5 0.5 L 0.5 0.5 L 0.5 5.413090229034424 L 0.5624499917030334 5.413090229034424 L 1.062450051307678 5.413090229034424 L 1.062450051307678 5.913090229034424 L 1.062450051307678 7.5 L 3.999919891357422 7.5 M 4.499919891357422 8 L 0.5624499917030334 8 L 0.5624499917030334 5.913090229034424 L 0 5.913090229034424 L 0 0 L 9 0 L 9 5.913090229034424 L 4.499919891357422 5.913090229034424 L 4.499919891357422 8 Z" stroke="none"/>
          </g>
        </g>
      </g>
    </g>
    <g id="Grupo_96" data-name="Grupo 96" transform="translate(603.195 193.079)">
      <g id="Grupo_84-3" data-name="Grupo 84" transform="translate(0 0)">
        <g id="Grupo_46-3" data-name="Grupo 46" transform="translate(0 0)">
          <g id="Unión_22-3" data-name="Unión 22" transform="translate(-0.195 -0.079)" fill="#fff">
            <path d="M 4.249919891357422 7.75 L 0.8124499917030334 7.75 L 0.8124499917030334 5.913090229034424 L 0.8124499917030334 5.663090229034424 L 0.5624499917030334 5.663090229034424 L 0.25 5.663090229034424 L 0.25 0.25 L 8.75 0.25 L 8.75 5.663090229034424 L 4.499919891357422 5.663090229034424 L 4.249919891357422 5.663090229034424 L 4.249919891357422 5.913090229034424 L 4.249919891357422 7.75 Z" stroke="none"/>
            <path d="M 3.999919891357422 7.5 L 3.999919891357422 5.913090229034424 L 3.999919891357422 5.413090229034424 L 4.499919891357422 5.413090229034424 L 8.5 5.413090229034424 L 8.5 0.5 L 0.5 0.5 L 0.5 5.413090229034424 L 0.5624499917030334 5.413090229034424 L 1.062450051307678 5.413090229034424 L 1.062450051307678 5.913090229034424 L 1.062450051307678 7.5 L 3.999919891357422 7.5 M 4.499919891357422 8 L 0.5624499917030334 8 L 0.5624499917030334 5.913090229034424 L 0 5.913090229034424 L 0 0 L 9 0 L 9 5.913090229034424 L 4.499919891357422 5.913090229034424 L 4.499919891357422 8 Z" stroke="none"/>
          </g>
        </g>
      </g>
    </g>
    <path id="Polígono_2" data-name="Polígono 2" d="M1.5,0,3,2H0Z" transform="translate(601.5 179.5) rotate(90)"/>
  </g>
  <g id="Grupo_181" data-name="Grupo 181" transform="translate(-1224.896 813)">
    <path id="Trazado_88" data-name="Trazado 88" d="M1587.866-590.918c-.009.176,2.228-2.255,9.77,0,.249.074.494.143.759.214,7.069,1.876,11.2-.518,11.837-1.467.656-.982-2.514,2.407-9.18-.535S1587.874-591.094,1587.866-590.918Z" transform="translate(180.58 225.337)" fill="#37c837"/>
    <g id="Grupo_60" data-name="Grupo 60" transform="translate(1780.341 -375.995)">
      <path id="path977-5-8" d="M-51.621,326.65H-48.4" transform="translate(53.209 -316.985)" fill="none" stroke="#241f1c" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.4"/>
      <path id="path979-8-6-6-8-5-7-2-3-7" d="M-49.04,320.686l-.022-6.147h.717l.042,6.142Z" transform="translate(51.949 -311.021)" fill="#784421" stroke="#241f1c" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.4"/>
      <ellipse id="path837-1-2-8-9-4" cx="2.309" cy="2.219" rx="2.309" ry="2.219" strokeWidth="0.4" transform="translate(0 3.339)" stroke="rgba(36,31,28,0.99)" strokeLinecap="round" strokeLinejoin="round" fill="#5fd35f"/>
      <ellipse id="ellipse9017" cx="3.53" cy="3.393" rx="3.53" ry="3.393" strokeWidth="0.4" transform="translate(0.951)" stroke="rgba(36,31,28,0.99)" strokeLinecap="round" strokeLinejoin="round" fill="#37c837"/>
    </g>
    <g id="Grupo_61" data-name="Grupo 61" transform="translate(1771.098 -383.585)">
      <ellipse id="path4729" cx="2.726" cy="2.53" rx="2.726" ry="2.53" strokeWidth="0.4" transform="translate(1.902 6.202)" stroke="#241f1c" strokeLinecap="round" strokeLinejoin="round" fill="#2ca02c"/>
      <path id="path979-8-6-6-8-5-7" d="M-13.286,399.612l-.039-10.918h1.273l.075,10.909Z" transform="translate(19.344 -383.119)" fill="#784421" stroke="#241f1c" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.4"/>
      <ellipse id="path4729-7" cx="3.655" cy="3.391" rx="3.655" ry="3.391" strokeWidth="0.4" transform="translate(0 1.58)" stroke="#241f1c" strokeLinecap="round" strokeLinejoin="round" fill="#37c837"/>
      <ellipse id="path4729-7-7" cx="3.655" cy="3.391" rx="3.655" ry="3.391" strokeWidth="0.4" transform="translate(4.214)" stroke="#241f1c" strokeLinecap="round" strokeLinejoin="round" fill="#5fd35f"/>
      <path id="path977-8-5-8-2-0" d="M-14.931,400.952h4.237" transform="translate(19.503 -384.326)" fill="none" stroke="#241f1c" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.4"/>
      <ellipse id="path4729-7-7-7" cx="2.637" cy="2.447" rx="2.637" ry="2.447" strokeWidth="0.4" transform="translate(7.41 5.544)" stroke="#241f1c" strokeLinecap="round" strokeLinejoin="round" fill="#37c837"/>
    </g>
  </g>
  <g id="Grupo_182" data-name="Grupo 182" transform="translate(323.007 880.24)">
    <path id="Trazado_7" data-name="Trazado 7" d="M215.08-407.592l-3.085-12.442,21.61,6.456-2.958,5.685Z" transform="translate(9 -54)" fill="#8dd1e4"/>
    <g id="Grupo_5" data-name="Grupo 5" transform="translate(230.078 -467.034)">
      <ellipse id="Elipse_10" data-name="Elipse 10" cx="7" cy="2.5" rx="7" ry="2.5" transform="translate(-0.085 1.793)" fill="#388caf"/>
      <ellipse id="Elipse_11" data-name="Elipse 11" cx="7" cy="2.5" rx="7" ry="2.5" transform="translate(-0.085 1.793)" fill="#5abce6"/>
      <g id="Elipse_12" data-name="Elipse 12" transform="translate(-0.085 1.793)" fill="none" stroke="#b4d6c8" strokeWidth="0.4">
        <ellipse cx="7" cy="2.5" rx="7" ry="2.5" stroke="none"/>
        <ellipse cx="7" cy="2.5" rx="6.8" ry="2.3" fill="none"/>
      </g>
      <path id="Trazado_4" data-name="Trazado 4" d="M249.153-389.013V-393.7" transform="translate(-246.195 394.598)" fill="none" stroke="#75c3e4" strokeWidth="0.4"/>
      <line id="Línea_2" data-name="Línea 2" x2="2.099" transform="translate(3.062 4.134)" fill="none" stroke="#75c3e4" strokeWidth="0.4"/>
      <line id="Línea_3" data-name="Línea 3" y1="4.494" transform="translate(5.161 0.955)" fill="none" stroke="#75c3e4" strokeWidth="0.4"/>
      <line id="Línea_4" data-name="Línea 4" x2="2.099" transform="translate(3.062 2.88)" fill="none" stroke="#75c3e4" strokeWidth="0.4"/>
      <line id="Línea_5" data-name="Línea 5" y1="1.499" transform="translate(1.563 0.955)" fill="none" stroke="#388caf" strokeWidth="0.4"/>
      <line id="Línea_6" data-name="Línea 6" y1="1.499" transform="translate(3.662 0.655)" fill="none" stroke="#388caf" strokeWidth="0.4"/>
      <path id="Trazado_5" data-name="Trazado 5" d="M244.508-395.069v.038l.023-.294a.737.737,0,0,1,.666-.362.68.68,0,0,1,.7.656" transform="translate(-242.942 395.986)" fill="none" stroke="#75c3e4" strokeWidth="0.4"/>
      <path id="Trazado_6" data-name="Trazado 6" d="M244.491-395.092v.059a.41.41,0,0,1,.046-.244.737.737,0,0,1,.659-.409.851.851,0,0,1,.784.84c.009.019.019.312.019.312" transform="translate(-240.829 395.686)" fill="none" stroke="#75c3e4" strokeWidth="0.4"/>
    </g>
    <g id="Grupo_14" data-name="Grupo 14" transform="translate(225.248 -470.204)">
      <path id="Unión_2" data-name="Unión 2" d="M2.106,8.388A2.249,2.249,0,0,1,3.663,7.8L3.327,3a1.577,1.577,0,0,0-1.538.388c0,.005,0,.012,0,.018L1.781,3.4l-.012.013a.2.2,0,0,0,0-.023A1.37,1.37,0,0,0,0,3.74,3.845,3.845,0,0,1,3.326.008L3.341,0,3.36.006A3.843,3.843,0,0,1,7.346,2.845a1.337,1.337,0,0,0-1.769.077l0,.026a1.734,1.734,0,0,0-1.943.184l.325,4.655a2.463,2.463,0,0,1,1.82.6H2.106ZM3.637,3.126s0,0,0,0Z" transform="translate(0.349 0.385)" fill="none" stroke="#b4d6c8" strokeWidth="0.4"/>
      <rect id="Rectángulo_19" data-name="Rectángulo 19" width="0.3" height="5.397" transform="matrix(0.998, -0.07, 0.07, 0.998, 3.656, 3.093)" fill="#85afbe"/>
      <path id="Sustracción_1" data-name="Sustracción 1" d="M3.676.6H0A2.475,2.475,0,0,1,1.838,0,2.476,2.476,0,0,1,3.676.6Z" transform="translate(2.456 8.173)" fill="#3289ad"/>
      <g id="Grupo_12" data-name="Grupo 12" transform="matrix(0.995, -0.105, 0.105, 0.995, 0, 0.773)">
        <path id="Trazado_28" data-name="Trazado 28" d="M3.718,0A3.848,3.848,0,0,0,0,3.367a1.365,1.365,0,0,1,1.813-.143A3.483,3.483,0,0,1,3.718,0Z" transform="translate(0 0.005)" fill="#388caf"/>
        <path id="Trazado_29" data-name="Trazado 29" d="M.9.6A3.439,3.439,0,0,1,1.917,3.137a1.335,1.335,0,0,1,1.769.105A3.848,3.848,0,0,0,0,0,3.642,3.642,0,0,1,.9.6Z" transform="translate(3.711 0.006)" fill="#388caf"/>
        <path id="Trazado_30" data-name="Trazado 30" d="M3.838,3.166A3.464,3.464,0,0,0,2.913.7,3.126,3.126,0,0,0,1.919,0,3.059,3.059,0,0,0,.925.7,3.488,3.488,0,0,0,0,3.232a1.5,1.5,0,0,1,1.868-.066c0,.159-.012.046,0,0s.04-.042,0,0A1.718,1.718,0,0,1,3.838,3.166Z" transform="translate(1.791 0)" fill="#d9eff7"/>
      </g>
    </g>
  </g>
  <text id="_" data-name="+" transform="translate(554 426)" fontSize="7" fontFamily="HelveticaNeue, Helvetica Neue"><tspan x="-2.1" y="0">+</tspan></text>
</g>
);
case "city-plan-level-2--10":
return (
<g id="Grupo_229" data-name="Grupo 229" transform="translate(-582 -342)">
    <rect id="Rectángulo_120" data-name="Rectángulo 120" width="53" height="180" transform="translate(582 342)" fill="none"/>
    <g id="Grupo_184" data-name="Grupo 184" transform="translate(591.678 455.589)">
      <path id="Trazado_88" data-name="Trazado 88" d="M1587.866-589.451c-.013.269,3.405-3.447,14.936,0,.38.113.755.219,1.161.327,10.807,2.867,17.127-.791,18.1-2.243,1-1.5-3.843,3.68-14.033-.818S1587.879-589.72,1587.866-589.451Z" transform="translate(-1587.866 616.974)" fill="#37c837"/>
      <g id="Grupo_60" data-name="Grupo 60" transform="translate(18.185 11.603)">
        <path id="path977-5-8" d="M-51.621,326.65h4.92" transform="translate(54.049 -311.874)" fill="none" stroke="#241f1c" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.4"/>
        <path id="path979-8-6-6-8-5-7-2-3-7" d="M-49.028,323.936l-.033-9.4h1.1l.064,9.389Z" transform="translate(53.475 -309.16)" fill="#784421" stroke="#241f1c" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.4"/>
        <ellipse id="path837-1-2-8-9-4" cx="3.53" cy="3.393" rx="3.53" ry="3.393" strokeWidth="0.4" transform="translate(0 5.105)" stroke="rgba(36,31,28,0.99)" strokeLinecap="round" strokeLinejoin="round" fill="#5fd35f"/>
        <ellipse id="ellipse9017" cx="5.397" cy="5.187" rx="5.397" ry="5.187" strokeWidth="0.4" transform="translate(1.454)" stroke="rgba(36,31,28,0.99)" strokeLinecap="round" strokeLinejoin="round" fill="#37c837"/>
      </g>
      <g id="Grupo_61" data-name="Grupo 61" transform="translate(4.056 0)">
        <ellipse id="path4729" cx="4.168" cy="3.868" rx="4.168" ry="3.868" strokeWidth="0.4" transform="translate(2.908 9.481)" stroke="#241f1c" strokeLinecap="round" strokeLinejoin="round" fill="#2ca02c"/>
        <path id="path979-8-6-6-8-5-7" d="M-13.265,405.386l-.059-16.692h1.947l.114,16.678Z" transform="translate(22.527 -380.172)" fill="#784421" stroke="#241f1c" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.4"/>
        <ellipse id="path4729-7" cx="5.587" cy="5.184" rx="5.587" ry="5.184" strokeWidth="0.4" transform="translate(0 2.416)" stroke="#241f1c" strokeLinecap="round" strokeLinejoin="round" fill="#37c837"/>
        <ellipse id="path4729-7-7" cx="5.587" cy="5.184" rx="5.587" ry="5.184" strokeWidth="0.4" transform="translate(6.443)" stroke="#241f1c" strokeLinecap="round" strokeLinejoin="round" fill="#5fd35f"/>
        <path id="path977-8-5-8-2-0" d="M-14.931,400.952h6.478" transform="translate(21.92 -375.535)" fill="none" stroke="#241f1c" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.4"/>
        <ellipse id="path4729-7-7-7" cx="4.031" cy="3.74" rx="4.031" ry="3.74" strokeWidth="0.4" transform="translate(11.329 8.475)" stroke="#241f1c" strokeLinecap="round" strokeLinejoin="round" fill="#37c837"/>
      </g>
    </g>
    <g id="Grupo_186" data-name="Grupo 186" transform="translate(599.195 491.079)">
      <g id="Grupo_84" data-name="Grupo 84" transform="translate(0 0)">
        <g id="Grupo_46" data-name="Grupo 46" transform="translate(0 0)">
          <g id="Unión_22" data-name="Unión 22" transform="translate(-0.195 -0.079)" fill="#d6d6d6">
            <path d="M 4.249919891357422 7.75 L 0.8124499917030334 7.75 L 0.8124499917030334 5.913090229034424 L 0.8124499917030334 5.663090229034424 L 0.5624499917030334 5.663090229034424 L 0.25 5.663090229034424 L 0.25 0.25 L 8.75 0.25 L 8.75 5.663090229034424 L 4.499919891357422 5.663090229034424 L 4.249919891357422 5.663090229034424 L 4.249919891357422 5.913090229034424 L 4.249919891357422 7.75 Z" stroke="none"/>
            <path d="M 3.999919891357422 7.5 L 3.999919891357422 5.913090229034424 L 3.999919891357422 5.413090229034424 L 4.499919891357422 5.413090229034424 L 8.5 5.413090229034424 L 8.5 0.5 L 0.5 0.5 L 0.5 5.413090229034424 L 0.5624499917030334 5.413090229034424 L 1.062450051307678 5.413090229034424 L 1.062450051307678 5.913090229034424 L 1.062450051307678 7.5 L 3.999919891357422 7.5 M 4.499919891357422 8 L 0.5624499917030334 8 L 0.5624499917030334 5.913090229034424 L 0 5.913090229034424 L 0 0 L 9 0 L 9 5.913090229034424 L 4.499919891357422 5.913090229034424 L 4.499919891357422 8 Z" stroke="none"/>
          </g>
        </g>
      </g>
    </g>
    <g id="Grupo_187" data-name="Grupo 187" transform="translate(609.195 491.079)">
      <g id="Grupo_84-2" data-name="Grupo 84" transform="translate(0 0)">
        <g id="Grupo_46-2" data-name="Grupo 46" transform="translate(0 0)">
          <g id="Unión_22-2" data-name="Unión 22" transform="translate(-0.195 -0.079)" fill="#d6d6d6">
            <path d="M 4.249919891357422 7.75 L 0.8124499917030334 7.75 L 0.8124499917030334 5.913090229034424 L 0.8124499917030334 5.663090229034424 L 0.5624499917030334 5.663090229034424 L 0.25 5.663090229034424 L 0.25 0.25 L 8.75 0.25 L 8.75 5.663090229034424 L 4.499919891357422 5.663090229034424 L 4.249919891357422 5.663090229034424 L 4.249919891357422 5.913090229034424 L 4.249919891357422 7.75 Z" stroke="none"/>
            <path d="M 3.999919891357422 7.5 L 3.999919891357422 5.913090229034424 L 3.999919891357422 5.413090229034424 L 4.499919891357422 5.413090229034424 L 8.5 5.413090229034424 L 8.5 0.5 L 0.5 0.5 L 0.5 5.413090229034424 L 0.5624499917030334 5.413090229034424 L 1.062450051307678 5.413090229034424 L 1.062450051307678 5.913090229034424 L 1.062450051307678 7.5 L 3.999919891357422 7.5 M 4.499919891357422 8 L 0.5624499917030334 8 L 0.5624499917030334 5.913090229034424 L 0 5.913090229034424 L 0 0 L 9 0 L 9 5.913090229034424 L 4.499919891357422 5.913090229034424 L 4.499919891357422 8 Z" stroke="none"/>
          </g>
        </g>
      </g>
    </g>
    <g id="Grupo_188" data-name="Grupo 188" transform="translate(619.195 491.079)">
      <g id="Grupo_84-3" data-name="Grupo 84" transform="translate(0 0)">
        <g id="Grupo_46-3" data-name="Grupo 46" transform="translate(0 0)">
          <g id="Unión_22-3" data-name="Unión 22" transform="translate(-0.195 -0.079)" fill="#d6d6d6">
            <path d="M 4.249919891357422 7.75 L 0.8124499917030334 7.75 L 0.8124499917030334 5.913090229034424 L 0.8124499917030334 5.663090229034424 L 0.5624499917030334 5.663090229034424 L 0.25 5.663090229034424 L 0.25 0.25 L 8.75 0.25 L 8.75 5.663090229034424 L 4.499919891357422 5.663090229034424 L 4.249919891357422 5.663090229034424 L 4.249919891357422 5.913090229034424 L 4.249919891357422 7.75 Z" stroke="none"/>
            <path d="M 3.999919891357422 7.5 L 3.999919891357422 5.913090229034424 L 3.999919891357422 5.413090229034424 L 4.499919891357422 5.413090229034424 L 8.5 5.413090229034424 L 8.5 0.5 L 0.5 0.5 L 0.5 5.413090229034424 L 0.5624499917030334 5.413090229034424 L 1.062450051307678 5.413090229034424 L 1.062450051307678 5.913090229034424 L 1.062450051307678 7.5 L 3.999919891357422 7.5 M 4.499919891357422 8 L 0.5624499917030334 8 L 0.5624499917030334 5.913090229034424 L 0 5.913090229034424 L 0 0 L 9 0 L 9 5.913090229034424 L 4.499919891357422 5.913090229034424 L 4.499919891357422 8 Z" stroke="none"/>
          </g>
        </g>
      </g>
    </g>
    <g id="Grupo_189" data-name="Grupo 189" transform="translate(599.195 430.079)">
      <g id="Grupo_84-4" data-name="Grupo 84" transform="translate(0 0)">
        <g id="Grupo_46-4" data-name="Grupo 46" transform="translate(0 0)">
          <g id="Unión_22-4" data-name="Unión 22" transform="translate(-0.195 -0.079)" fill="#d6d6d6">
            <path d="M 4.249919891357422 7.75 L 0.8124499917030334 7.75 L 0.8124499917030334 5.913090229034424 L 0.8124499917030334 5.663090229034424 L 0.5624499917030334 5.663090229034424 L 0.25 5.663090229034424 L 0.25 0.25 L 8.75 0.25 L 8.75 5.663090229034424 L 4.499919891357422 5.663090229034424 L 4.249919891357422 5.663090229034424 L 4.249919891357422 5.913090229034424 L 4.249919891357422 7.75 Z" stroke="none"/>
            <path d="M 3.999919891357422 7.5 L 3.999919891357422 5.913090229034424 L 3.999919891357422 5.413090229034424 L 4.499919891357422 5.413090229034424 L 8.5 5.413090229034424 L 8.5 0.5 L 0.5 0.5 L 0.5 5.413090229034424 L 0.5624499917030334 5.413090229034424 L 1.062450051307678 5.413090229034424 L 1.062450051307678 5.913090229034424 L 1.062450051307678 7.5 L 3.999919891357422 7.5 M 4.499919891357422 8 L 0.5624499917030334 8 L 0.5624499917030334 5.913090229034424 L 0 5.913090229034424 L 0 0 L 9 0 L 9 5.913090229034424 L 4.499919891357422 5.913090229034424 L 4.499919891357422 8 Z" stroke="none"/>
          </g>
        </g>
      </g>
    </g>
    <g id="Grupo_190" data-name="Grupo 190" transform="translate(609.195 430.079)">
      <g id="Grupo_84-5" data-name="Grupo 84" transform="translate(0 0)">
        <g id="Grupo_46-5" data-name="Grupo 46" transform="translate(0 0)">
          <g id="Unión_22-5" data-name="Unión 22" transform="translate(-0.195 -0.079)" fill="#d6d6d6">
            <path d="M 4.249919891357422 7.75 L 0.8124499917030334 7.75 L 0.8124499917030334 5.913090229034424 L 0.8124499917030334 5.663090229034424 L 0.5624499917030334 5.663090229034424 L 0.25 5.663090229034424 L 0.25 0.25 L 8.75 0.25 L 8.75 5.663090229034424 L 4.499919891357422 5.663090229034424 L 4.249919891357422 5.663090229034424 L 4.249919891357422 5.913090229034424 L 4.249919891357422 7.75 Z" stroke="none"/>
            <path d="M 3.999919891357422 7.5 L 3.999919891357422 5.913090229034424 L 3.999919891357422 5.413090229034424 L 4.499919891357422 5.413090229034424 L 8.5 5.413090229034424 L 8.5 0.5 L 0.5 0.5 L 0.5 5.413090229034424 L 0.5624499917030334 5.413090229034424 L 1.062450051307678 5.413090229034424 L 1.062450051307678 5.913090229034424 L 1.062450051307678 7.5 L 3.999919891357422 7.5 M 4.499919891357422 8 L 0.5624499917030334 8 L 0.5624499917030334 5.913090229034424 L 0 5.913090229034424 L 0 0 L 9 0 L 9 5.913090229034424 L 4.499919891357422 5.913090229034424 L 4.499919891357422 8 Z" stroke="none"/>
          </g>
        </g>
      </g>
    </g>
    <g id="Grupo_191" data-name="Grupo 191" transform="translate(619.195 430.079)">
      <g id="Grupo_84-6" data-name="Grupo 84" transform="translate(0 0)">
        <g id="Grupo_46-6" data-name="Grupo 46" transform="translate(0 0)">
          <g id="Unión_22-6" data-name="Unión 22" transform="translate(-0.195 -0.079)" fill="#d6d6d6">
            <path d="M 4.249919891357422 7.75 L 0.8124499917030334 7.75 L 0.8124499917030334 5.913090229034424 L 0.8124499917030334 5.663090229034424 L 0.5624499917030334 5.663090229034424 L 0.25 5.663090229034424 L 0.25 0.25 L 8.75 0.25 L 8.75 5.663090229034424 L 4.499919891357422 5.663090229034424 L 4.249919891357422 5.663090229034424 L 4.249919891357422 5.913090229034424 L 4.249919891357422 7.75 Z" stroke="none"/>
            <path d="M 3.999919891357422 7.5 L 3.999919891357422 5.913090229034424 L 3.999919891357422 5.413090229034424 L 4.499919891357422 5.413090229034424 L 8.5 5.413090229034424 L 8.5 0.5 L 0.5 0.5 L 0.5 5.413090229034424 L 0.5624499917030334 5.413090229034424 L 1.062450051307678 5.413090229034424 L 1.062450051307678 5.913090229034424 L 1.062450051307678 7.5 L 3.999919891357422 7.5 M 4.499919891357422 8 L 0.5624499917030334 8 L 0.5624499917030334 5.913090229034424 L 0 5.913090229034424 L 0 0 L 9 0 L 9 5.913090229034424 L 4.499919891357422 5.913090229034424 L 4.499919891357422 8 Z" stroke="none"/>
          </g>
        </g>
      </g>
    </g>
    <g id="Grupo_192" data-name="Grupo 192" transform="translate(589.195 491.079)">
      <g id="Grupo_84-7" data-name="Grupo 84" transform="translate(0 0)">
        <g id="Grupo_46-7" data-name="Grupo 46" transform="translate(0 0)">
          <g id="Unión_22-7" data-name="Unión 22" transform="translate(-0.195 -0.079)" fill="#d6d6d6">
            <path d="M 4.249919891357422 7.75 L 0.8124499917030334 7.75 L 0.8124499917030334 5.913090229034424 L 0.8124499917030334 5.663090229034424 L 0.5624499917030334 5.663090229034424 L 0.25 5.663090229034424 L 0.25 0.25 L 8.75 0.25 L 8.75 5.663090229034424 L 4.499919891357422 5.663090229034424 L 4.249919891357422 5.663090229034424 L 4.249919891357422 5.913090229034424 L 4.249919891357422 7.75 Z" stroke="none"/>
            <path d="M 3.999919891357422 7.5 L 3.999919891357422 5.913090229034424 L 3.999919891357422 5.413090229034424 L 4.499919891357422 5.413090229034424 L 8.5 5.413090229034424 L 8.5 0.5 L 0.5 0.5 L 0.5 5.413090229034424 L 0.5624499917030334 5.413090229034424 L 1.062450051307678 5.413090229034424 L 1.062450051307678 5.913090229034424 L 1.062450051307678 7.5 L 3.999919891357422 7.5 M 4.499919891357422 8 L 0.5624499917030334 8 L 0.5624499917030334 5.913090229034424 L 0 5.913090229034424 L 0 0 L 9 0 L 9 5.913090229034424 L 4.499919891357422 5.913090229034424 L 4.499919891357422 8 Z" stroke="none"/>
          </g>
        </g>
      </g>
    </g>
    <g id="Grupo_193" data-name="Grupo 193" transform="translate(589.195 430.079)">
      <g id="Grupo_84-8" data-name="Grupo 84" transform="translate(0 0)">
        <g id="Grupo_46-8" data-name="Grupo 46" transform="translate(0 0)">
          <g id="Unión_22-8" data-name="Unión 22" transform="translate(-0.195 -0.079)" fill="#d6d6d6">
            <path d="M 4.249919891357422 7.75 L 0.8124499917030334 7.75 L 0.8124499917030334 5.913090229034424 L 0.8124499917030334 5.663090229034424 L 0.5624499917030334 5.663090229034424 L 0.25 5.663090229034424 L 0.25 0.25 L 8.75 0.25 L 8.75 5.663090229034424 L 4.499919891357422 5.663090229034424 L 4.249919891357422 5.663090229034424 L 4.249919891357422 5.913090229034424 L 4.249919891357422 7.75 Z" stroke="none"/>
            <path d="M 3.999919891357422 7.5 L 3.999919891357422 5.913090229034424 L 3.999919891357422 5.413090229034424 L 4.499919891357422 5.413090229034424 L 8.5 5.413090229034424 L 8.5 0.5 L 0.5 0.5 L 0.5 5.413090229034424 L 0.5624499917030334 5.413090229034424 L 1.062450051307678 5.413090229034424 L 1.062450051307678 5.913090229034424 L 1.062450051307678 7.5 L 3.999919891357422 7.5 M 4.499919891357422 8 L 0.5624499917030334 8 L 0.5624499917030334 5.913090229034424 L 0 5.913090229034424 L 0 0 L 9 0 L 9 5.913090229034424 L 4.499919891357422 5.913090229034424 L 4.499919891357422 8 Z" stroke="none"/>
          </g>
        </g>
      </g>
    </g>
    <g id="Grupo_194" data-name="Grupo 194" transform="translate(368.007 876.24)">
      <path id="Trazado_7" data-name="Trazado 7" d="M216.973-399.956l-4.978-20.078,34.872,10.417-4.774,9.174Z" transform="translate(9 -54)" fill="#8dd1e4"/>
      <g id="Grupo_5" data-name="Grupo 5" transform="translate(235.515 -462.737)">
        <ellipse id="Elipse_10" data-name="Elipse 10" cx="11" cy="4" rx="11" ry="4" transform="translate(0.478 2.497)" fill="#388caf"/>
        <ellipse id="Elipse_11" data-name="Elipse 11" cx="11" cy="4" rx="11" ry="4" transform="translate(0.478 2.497)" fill="#5abce6"/>
        <g id="Elipse_12" data-name="Elipse 12" transform="translate(0.478 2.497)" fill="none" stroke="#b4d6c8" strokeWidth="0.4">
          <ellipse cx="11" cy="4" rx="11" ry="4" stroke="none"/>
          <ellipse cx="11" cy="4" rx="10.8" ry="3.8" fill="none"/>
        </g>
        <path id="Trazado_4" data-name="Trazado 4" d="M249.153-386.134v-7.57" transform="translate(-244.243 395.147)" fill="none" stroke="#75c3e4" strokeWidth="0.4"/>
        <line id="Línea_2" data-name="Línea 2" x2="3.387" transform="translate(5.079 6.671)" fill="none" stroke="#75c3e4" strokeWidth="0.4"/>
        <line id="Línea_3" data-name="Línea 3" y1="7.252" transform="translate(8.466 1.542)" fill="none" stroke="#75c3e4" strokeWidth="0.4"/>
        <line id="Línea_4" data-name="Línea 4" x2="3.387" transform="translate(5.079 4.647)" fill="none" stroke="#75c3e4" strokeWidth="0.4"/>
        <line id="Línea_5" data-name="Línea 5" y1="2.419" transform="translate(2.659 1.542)" fill="none" stroke="#388caf" strokeWidth="0.4"/>
        <line id="Línea_6" data-name="Línea 6" y1="2.419" transform="translate(6.046 1.058)" fill="none" stroke="#388caf" strokeWidth="0.4"/>
        <path id="Trazado_5" data-name="Trazado 5" d="M244.508-394.69v.061l.037-.474a1.19,1.19,0,0,1,1.074-.583,1.1,1.1,0,0,1,1.136,1.058" transform="translate(-241.845 396.17)" fill="none" stroke="#75c3e4" strokeWidth="0.4"/>
        <path id="Trazado_6" data-name="Trazado 6" d="M244.494-394.727v.1a.662.662,0,0,1,.074-.394,1.19,1.19,0,0,1,1.063-.66,1.373,1.373,0,0,1,1.265,1.355c.015.031.031.5.031.5" transform="translate(-238.447 395.686)" fill="none" stroke="#75c3e4" strokeWidth="0.4"/>
      </g>
      <g id="Grupo_14" data-name="Grupo 14" transform="translate(227.858 -467.853)">
        <path id="Unión_2" data-name="Unión 2" d="M9.331,13.535H3.4a3.629,3.629,0,0,1,2.512-.952L5.37,4.845a2.544,2.544,0,0,0-2.482.627l0,.029-.016-.012a.211.211,0,0,0-.017.023c0-.013,0-.025,0-.038a2.21,2.21,0,0,0-2.848.563C-.122,3.187,2.174.632,5.369.013L5.392,0l.03.009c3.136-.056,5.917,1.868,6.434,4.582A2.158,2.158,0,0,0,9,4.716l.005.041a2.8,2.8,0,0,0-3.136.3L6.4,12.568a3.977,3.977,0,0,1,2.937.967h0ZM5.869,5.046c0-.007,0-.01,0-.01Z" transform="translate(0.563 0.622)" fill="none" stroke="#b4d6c8" strokeWidth="0.4"/>
        <rect id="Rectángulo_19" data-name="Rectángulo 19" width="0.484" height="8.71" transform="matrix(0.998, -0.07, 0.07, 0.998, 5.9, 4.991)" fill="#85afbe"/>
        <path id="Sustracción_1" data-name="Sustracción 1" d="M5.933.968H0A3.993,3.993,0,0,1,2.967,0,4,4,0,0,1,5.932.967Z" transform="translate(3.963 13.189)" fill="#3289ad"/>
        <g id="Grupo_12" data-name="Grupo 12" transform="matrix(0.995, -0.105, 0.105, 0.995, 0, 1.248)">
          <path id="Trazado_28" data-name="Trazado 28" d="M6,0C2.742.267.172,2.576,0,5.433A2.2,2.2,0,0,1,2.925,5.2,5.62,5.62,0,0,1,6,0Z" transform="translate(0 0.008)" fill="#388caf"/>
          <path id="Trazado_29" data-name="Trazado 29" d="M1.453.975a5.55,5.55,0,0,1,1.64,4.087,2.155,2.155,0,0,1,2.855.17C5.717,2.47,3.137.26,0,0A5.877,5.877,0,0,1,1.453.975Z" transform="translate(5.988 0.01)" fill="#388caf"/>
          <path id="Trazado_30" data-name="Trazado 30" d="M6.194,5.109A5.59,5.59,0,0,0,4.7,1.123,5.044,5.044,0,0,0,3.1,0a4.937,4.937,0,0,0-1.6,1.123A5.629,5.629,0,0,0,0,5.216a2.427,2.427,0,0,1,3.014-.107c-.008.257-.019.074,0,0s.064-.068,0,0A2.773,2.773,0,0,1,6.194,5.109Z" transform="translate(2.89 0)" fill="#d9eff7"/>
        </g>
      </g>
    </g>
    <g id="Elipse_43" data-name="Elipse 43" transform="translate(590 351)" fill="#fff" stroke="#000" strokeWidth="2">
      <circle cx="18" cy="18" r="18" stroke="none"/>
      <circle cx="18" cy="18" r="17" fill="none"/>
    </g>
    <g id="Elipse_44" data-name="Elipse 44" transform="translate(593 354)" fill="#fff" stroke="#000" strokeWidth="1">
      <circle cx="15" cy="15" r="15" stroke="none"/>
      <circle cx="15" cy="15" r="14.5" fill="none"/>
    </g>
    <text id="_1" data-name="1" transform="translate(608 375)" fontSize="16" fontFamily="HelveticaNeue, Helvetica Neue"><tspan x="-4.448" y="0">1</tspan></text>
  </g>
);
case "city-plan-level-2--11":
return (
<g id="Grupo_230" data-name="Grupo 230" transform="translate(-640 -342)">
    <rect id="Rectángulo_121" data-name="Rectángulo 121" width="53" height="180" transform="translate(640 342)" fill="none"/>
    <g id="Grupo_198" data-name="Grupo 198" transform="translate(647.195 469.079)">
      <g id="Grupo_84" data-name="Grupo 84" transform="translate(0 0)">
        <g id="Grupo_46" data-name="Grupo 46" transform="translate(0 0)">
          <g id="Unión_22" data-name="Unión 22" transform="translate(-0.195 -0.079)" fill="#d6d6d6">
            <path d="M 4.249919891357422 7.75 L 0.8124499917030334 7.75 L 0.8124499917030334 5.913090229034424 L 0.8124499917030334 5.663090229034424 L 0.5624499917030334 5.663090229034424 L 0.25 5.663090229034424 L 0.25 0.25 L 8.75 0.25 L 8.75 5.663090229034424 L 4.499919891357422 5.663090229034424 L 4.249919891357422 5.663090229034424 L 4.249919891357422 5.913090229034424 L 4.249919891357422 7.75 Z" stroke="none"/>
            <path d="M 3.999919891357422 7.5 L 3.999919891357422 5.913090229034424 L 3.999919891357422 5.413090229034424 L 4.499919891357422 5.413090229034424 L 8.5 5.413090229034424 L 8.5 0.5 L 0.5 0.5 L 0.5 5.413090229034424 L 0.5624499917030334 5.413090229034424 L 1.062450051307678 5.413090229034424 L 1.062450051307678 5.913090229034424 L 1.062450051307678 7.5 L 3.999919891357422 7.5 M 4.499919891357422 8 L 0.5624499917030334 8 L 0.5624499917030334 5.913090229034424 L 0 5.913090229034424 L 0 0 L 9 0 L 9 5.913090229034424 L 4.499919891357422 5.913090229034424 L 4.499919891357422 8 Z" stroke="none"/>
          </g>
        </g>
      </g>
    </g>
    <g id="Grupo_199" data-name="Grupo 199" transform="translate(657.195 469.079)">
      <g id="Grupo_84-2" data-name="Grupo 84" transform="translate(0 0)">
        <g id="Grupo_46-2" data-name="Grupo 46" transform="translate(0 0)">
          <g id="Unión_22-2" data-name="Unión 22" transform="translate(-0.195 -0.079)" fill="#d6d6d6">
            <path d="M 4.249919891357422 7.75 L 0.8124499917030334 7.75 L 0.8124499917030334 5.913090229034424 L 0.8124499917030334 5.663090229034424 L 0.5624499917030334 5.663090229034424 L 0.25 5.663090229034424 L 0.25 0.25 L 8.75 0.25 L 8.75 5.663090229034424 L 4.499919891357422 5.663090229034424 L 4.249919891357422 5.663090229034424 L 4.249919891357422 5.913090229034424 L 4.249919891357422 7.75 Z" stroke="none"/>
            <path d="M 3.999919891357422 7.5 L 3.999919891357422 5.913090229034424 L 3.999919891357422 5.413090229034424 L 4.499919891357422 5.413090229034424 L 8.5 5.413090229034424 L 8.5 0.5 L 0.5 0.5 L 0.5 5.413090229034424 L 0.5624499917030334 5.413090229034424 L 1.062450051307678 5.413090229034424 L 1.062450051307678 5.913090229034424 L 1.062450051307678 7.5 L 3.999919891357422 7.5 M 4.499919891357422 8 L 0.5624499917030334 8 L 0.5624499917030334 5.913090229034424 L 0 5.913090229034424 L 0 0 L 9 0 L 9 5.913090229034424 L 4.499919891357422 5.913090229034424 L 4.499919891357422 8 Z" stroke="none"/>
          </g>
        </g>
      </g>
    </g>
    <g id="Grupo_200" data-name="Grupo 200" transform="translate(667.195 469.079)">
      <g id="Grupo_84-3" data-name="Grupo 84" transform="translate(0 0)">
        <g id="Grupo_46-3" data-name="Grupo 46" transform="translate(0 0)">
          <g id="Unión_22-3" data-name="Unión 22" transform="translate(-0.195 -0.079)" fill="#d6d6d6">
            <path d="M 4.249919891357422 7.75 L 0.8124499917030334 7.75 L 0.8124499917030334 5.913090229034424 L 0.8124499917030334 5.663090229034424 L 0.5624499917030334 5.663090229034424 L 0.25 5.663090229034424 L 0.25 0.25 L 8.75 0.25 L 8.75 5.663090229034424 L 4.499919891357422 5.663090229034424 L 4.249919891357422 5.663090229034424 L 4.249919891357422 5.913090229034424 L 4.249919891357422 7.75 Z" stroke="none"/>
            <path d="M 3.999919891357422 7.5 L 3.999919891357422 5.913090229034424 L 3.999919891357422 5.413090229034424 L 4.499919891357422 5.413090229034424 L 8.5 5.413090229034424 L 8.5 0.5 L 0.5 0.5 L 0.5 5.413090229034424 L 0.5624499917030334 5.413090229034424 L 1.062450051307678 5.413090229034424 L 1.062450051307678 5.913090229034424 L 1.062450051307678 7.5 L 3.999919891357422 7.5 M 4.499919891357422 8 L 0.5624499917030334 8 L 0.5624499917030334 5.913090229034424 L 0 5.913090229034424 L 0 0 L 9 0 L 9 5.913090229034424 L 4.499919891357422 5.913090229034424 L 4.499919891357422 8 Z" stroke="none"/>
          </g>
        </g>
      </g>
    </g>
    <g id="Grupo_201" data-name="Grupo 201" transform="translate(647.195 408.079)">
      <g id="Grupo_84-4" data-name="Grupo 84" transform="translate(0 0)">
        <g id="Grupo_46-4" data-name="Grupo 46" transform="translate(0 0)">
          <g id="Unión_22-4" data-name="Unión 22" transform="translate(-0.195 -0.079)" fill="#d6d6d6">
            <path d="M 4.249919891357422 7.75 L 0.8124499917030334 7.75 L 0.8124499917030334 5.913090229034424 L 0.8124499917030334 5.663090229034424 L 0.5624499917030334 5.663090229034424 L 0.25 5.663090229034424 L 0.25 0.25 L 8.75 0.25 L 8.75 5.663090229034424 L 4.499919891357422 5.663090229034424 L 4.249919891357422 5.663090229034424 L 4.249919891357422 5.913090229034424 L 4.249919891357422 7.75 Z" stroke="none"/>
            <path d="M 3.999919891357422 7.5 L 3.999919891357422 5.913090229034424 L 3.999919891357422 5.413090229034424 L 4.499919891357422 5.413090229034424 L 8.5 5.413090229034424 L 8.5 0.5 L 0.5 0.5 L 0.5 5.413090229034424 L 0.5624499917030334 5.413090229034424 L 1.062450051307678 5.413090229034424 L 1.062450051307678 5.913090229034424 L 1.062450051307678 7.5 L 3.999919891357422 7.5 M 4.499919891357422 8 L 0.5624499917030334 8 L 0.5624499917030334 5.913090229034424 L 0 5.913090229034424 L 0 0 L 9 0 L 9 5.913090229034424 L 4.499919891357422 5.913090229034424 L 4.499919891357422 8 Z" stroke="none"/>
          </g>
        </g>
      </g>
    </g>
    <g id="Grupo_202" data-name="Grupo 202" transform="translate(657.195 408.079)">
      <g id="Grupo_84-5" data-name="Grupo 84" transform="translate(0 0)">
        <g id="Grupo_46-5" data-name="Grupo 46" transform="translate(0 0)">
          <g id="Unión_22-5" data-name="Unión 22" transform="translate(-0.195 -0.079)" fill="#d6d6d6">
            <path d="M 4.249919891357422 7.75 L 0.8124499917030334 7.75 L 0.8124499917030334 5.913090229034424 L 0.8124499917030334 5.663090229034424 L 0.5624499917030334 5.663090229034424 L 0.25 5.663090229034424 L 0.25 0.25 L 8.75 0.25 L 8.75 5.663090229034424 L 4.499919891357422 5.663090229034424 L 4.249919891357422 5.663090229034424 L 4.249919891357422 5.913090229034424 L 4.249919891357422 7.75 Z" stroke="none"/>
            <path d="M 3.999919891357422 7.5 L 3.999919891357422 5.913090229034424 L 3.999919891357422 5.413090229034424 L 4.499919891357422 5.413090229034424 L 8.5 5.413090229034424 L 8.5 0.5 L 0.5 0.5 L 0.5 5.413090229034424 L 0.5624499917030334 5.413090229034424 L 1.062450051307678 5.413090229034424 L 1.062450051307678 5.913090229034424 L 1.062450051307678 7.5 L 3.999919891357422 7.5 M 4.499919891357422 8 L 0.5624499917030334 8 L 0.5624499917030334 5.913090229034424 L 0 5.913090229034424 L 0 0 L 9 0 L 9 5.913090229034424 L 4.499919891357422 5.913090229034424 L 4.499919891357422 8 Z" stroke="none"/>
          </g>
        </g>
      </g>
    </g>
    <g id="Grupo_203" data-name="Grupo 203" transform="translate(667.195 408.079)">
      <g id="Grupo_84-6" data-name="Grupo 84" transform="translate(0 0)">
        <g id="Grupo_46-6" data-name="Grupo 46" transform="translate(0 0)">
          <g id="Unión_22-6" data-name="Unión 22" transform="translate(-0.195 -0.079)" fill="#d6d6d6">
            <path d="M 4.249919891357422 7.75 L 0.8124499917030334 7.75 L 0.8124499917030334 5.913090229034424 L 0.8124499917030334 5.663090229034424 L 0.5624499917030334 5.663090229034424 L 0.25 5.663090229034424 L 0.25 0.25 L 8.75 0.25 L 8.75 5.663090229034424 L 4.499919891357422 5.663090229034424 L 4.249919891357422 5.663090229034424 L 4.249919891357422 5.913090229034424 L 4.249919891357422 7.75 Z" stroke="none"/>
            <path d="M 3.999919891357422 7.5 L 3.999919891357422 5.913090229034424 L 3.999919891357422 5.413090229034424 L 4.499919891357422 5.413090229034424 L 8.5 5.413090229034424 L 8.5 0.5 L 0.5 0.5 L 0.5 5.413090229034424 L 0.5624499917030334 5.413090229034424 L 1.062450051307678 5.413090229034424 L 1.062450051307678 5.913090229034424 L 1.062450051307678 7.5 L 3.999919891357422 7.5 M 4.499919891357422 8 L 0.5624499917030334 8 L 0.5624499917030334 5.913090229034424 L 0 5.913090229034424 L 0 0 L 9 0 L 9 5.913090229034424 L 4.499919891357422 5.913090229034424 L 4.499919891357422 8 Z" stroke="none"/>
          </g>
        </g>
      </g>
    </g>
    <g id="Grupo_204" data-name="Grupo 204" transform="translate(677.195 469.079)">
      <g id="Grupo_84-7" data-name="Grupo 84" transform="translate(0 0)">
        <g id="Grupo_46-7" data-name="Grupo 46" transform="translate(0 0)">
          <g id="Unión_22-7" data-name="Unión 22" transform="translate(-0.195 -0.079)" fill="#d6d6d6">
            <path d="M 4.249919891357422 7.75 L 0.8124499917030334 7.75 L 0.8124499917030334 5.913090229034424 L 0.8124499917030334 5.663090229034424 L 0.5624499917030334 5.663090229034424 L 0.25 5.663090229034424 L 0.25 0.25 L 8.75 0.25 L 8.75 5.663090229034424 L 4.499919891357422 5.663090229034424 L 4.249919891357422 5.663090229034424 L 4.249919891357422 5.913090229034424 L 4.249919891357422 7.75 Z" stroke="none"/>
            <path d="M 3.999919891357422 7.5 L 3.999919891357422 5.913090229034424 L 3.999919891357422 5.413090229034424 L 4.499919891357422 5.413090229034424 L 8.5 5.413090229034424 L 8.5 0.5 L 0.5 0.5 L 0.5 5.413090229034424 L 0.5624499917030334 5.413090229034424 L 1.062450051307678 5.413090229034424 L 1.062450051307678 5.913090229034424 L 1.062450051307678 7.5 L 3.999919891357422 7.5 M 4.499919891357422 8 L 0.5624499917030334 8 L 0.5624499917030334 5.913090229034424 L 0 5.913090229034424 L 0 0 L 9 0 L 9 5.913090229034424 L 4.499919891357422 5.913090229034424 L 4.499919891357422 8 Z" stroke="none"/>
          </g>
        </g>
      </g>
    </g>
    <g id="Grupo_205" data-name="Grupo 205" transform="translate(677.195 408.079)">
      <g id="Grupo_84-8" data-name="Grupo 84" transform="translate(0 0)">
        <g id="Grupo_46-8" data-name="Grupo 46" transform="translate(0 0)">
          <g id="Unión_22-8" data-name="Unión 22" transform="translate(-0.195 -0.079)" fill="#d6d6d6">
            <path d="M 4.249919891357422 7.75 L 0.8124499917030334 7.75 L 0.8124499917030334 5.913090229034424 L 0.8124499917030334 5.663090229034424 L 0.5624499917030334 5.663090229034424 L 0.25 5.663090229034424 L 0.25 0.25 L 8.75 0.25 L 8.75 5.663090229034424 L 4.499919891357422 5.663090229034424 L 4.249919891357422 5.663090229034424 L 4.249919891357422 5.913090229034424 L 4.249919891357422 7.75 Z" stroke="none"/>
            <path d="M 3.999919891357422 7.5 L 3.999919891357422 5.913090229034424 L 3.999919891357422 5.413090229034424 L 4.499919891357422 5.413090229034424 L 8.5 5.413090229034424 L 8.5 0.5 L 0.5 0.5 L 0.5 5.413090229034424 L 0.5624499917030334 5.413090229034424 L 1.062450051307678 5.413090229034424 L 1.062450051307678 5.913090229034424 L 1.062450051307678 7.5 L 3.999919891357422 7.5 M 4.499919891357422 8 L 0.5624499917030334 8 L 0.5624499917030334 5.913090229034424 L 0 5.913090229034424 L 0 0 L 9 0 L 9 5.913090229034424 L 4.499919891357422 5.913090229034424 L 4.499919891357422 8 Z" stroke="none"/>
          </g>
        </g>
      </g>
    </g>
    <g id="Grupo_206" data-name="Grupo 206" transform="translate(426.007 918.24)">
      <path id="Trazado_7" data-name="Trazado 7" d="M216.973-399.956l-4.978-20.078,34.872,10.417-4.774,9.174Z" transform="translate(9 -54)" fill="#8dd1e4"/>
      <g id="Grupo_5" data-name="Grupo 5" transform="translate(235.515 -462.737)">
        <ellipse id="Elipse_10" data-name="Elipse 10" cx="11" cy="4" rx="11" ry="4" transform="translate(0.478 2.497)" fill="#388caf"/>
        <ellipse id="Elipse_11" data-name="Elipse 11" cx="11" cy="4" rx="11" ry="4" transform="translate(0.478 2.497)" fill="#5abce6"/>
        <g id="Elipse_12" data-name="Elipse 12" transform="translate(0.478 2.497)" fill="none" stroke="#b4d6c8" strokeWidth="0.4">
          <ellipse cx="11" cy="4" rx="11" ry="4" stroke="none"/>
          <ellipse cx="11" cy="4" rx="10.8" ry="3.8" fill="none"/>
        </g>
        <path id="Trazado_4" data-name="Trazado 4" d="M249.153-386.134v-7.57" transform="translate(-244.243 395.147)" fill="none" stroke="#75c3e4" strokeWidth="0.4"/>
        <line id="Línea_2" data-name="Línea 2" x2="3.387" transform="translate(5.079 6.671)" fill="none" stroke="#75c3e4" strokeWidth="0.4"/>
        <line id="Línea_3" data-name="Línea 3" y1="7.252" transform="translate(8.466 1.542)" fill="none" stroke="#75c3e4" strokeWidth="0.4"/>
        <line id="Línea_4" data-name="Línea 4" x2="3.387" transform="translate(5.079 4.647)" fill="none" stroke="#75c3e4" strokeWidth="0.4"/>
        <line id="Línea_5" data-name="Línea 5" y1="2.419" transform="translate(2.659 1.542)" fill="none" stroke="#388caf" strokeWidth="0.4"/>
        <line id="Línea_6" data-name="Línea 6" y1="2.419" transform="translate(6.046 1.058)" fill="none" stroke="#388caf" strokeWidth="0.4"/>
        <path id="Trazado_5" data-name="Trazado 5" d="M244.508-394.69v.061l.037-.474a1.19,1.19,0,0,1,1.074-.583,1.1,1.1,0,0,1,1.136,1.058" transform="translate(-241.845 396.17)" fill="none" stroke="#75c3e4" strokeWidth="0.4"/>
        <path id="Trazado_6" data-name="Trazado 6" d="M244.494-394.727v.1a.662.662,0,0,1,.074-.394,1.19,1.19,0,0,1,1.063-.66,1.373,1.373,0,0,1,1.265,1.355c.015.031.031.5.031.5" transform="translate(-238.447 395.686)" fill="none" stroke="#75c3e4" strokeWidth="0.4"/>
      </g>
      <g id="Grupo_14" data-name="Grupo 14" transform="translate(227.858 -467.853)">
        <path id="Unión_2" data-name="Unión 2" d="M9.331,13.535H3.4a3.629,3.629,0,0,1,2.512-.952L5.37,4.845a2.544,2.544,0,0,0-2.482.627l0,.029-.016-.012a.211.211,0,0,0-.017.023c0-.013,0-.025,0-.038a2.21,2.21,0,0,0-2.848.563C-.122,3.187,2.174.632,5.369.013L5.392,0l.03.009c3.136-.056,5.917,1.868,6.434,4.582A2.158,2.158,0,0,0,9,4.716l.005.041a2.8,2.8,0,0,0-3.136.3L6.4,12.568a3.977,3.977,0,0,1,2.937.967h0ZM5.869,5.046c0-.007,0-.01,0-.01Z" transform="translate(0.563 0.622)" fill="none" stroke="#b4d6c8" strokeWidth="0.4"/>
        <rect id="Rectángulo_19" data-name="Rectángulo 19" width="0.484" height="8.71" transform="matrix(0.998, -0.07, 0.07, 0.998, 5.9, 4.991)" fill="#85afbe"/>
        <path id="Sustracción_1" data-name="Sustracción 1" d="M5.933.968H0A3.993,3.993,0,0,1,2.967,0,4,4,0,0,1,5.932.967Z" transform="translate(3.963 13.189)" fill="#3289ad"/>
        <g id="Grupo_12" data-name="Grupo 12" transform="matrix(0.995, -0.105, 0.105, 0.995, 0, 1.248)">
          <path id="Trazado_28" data-name="Trazado 28" d="M6,0C2.742.267.172,2.576,0,5.433A2.2,2.2,0,0,1,2.925,5.2,5.62,5.62,0,0,1,6,0Z" transform="translate(0 0.008)" fill="#388caf"/>
          <path id="Trazado_29" data-name="Trazado 29" d="M1.453.975a5.55,5.55,0,0,1,1.64,4.087,2.155,2.155,0,0,1,2.855.17C5.717,2.47,3.137.26,0,0A5.877,5.877,0,0,1,1.453.975Z" transform="translate(5.988 0.01)" fill="#388caf"/>
          <path id="Trazado_30" data-name="Trazado 30" d="M6.194,5.109A5.59,5.59,0,0,0,4.7,1.123,5.044,5.044,0,0,0,3.1,0a4.937,4.937,0,0,0-1.6,1.123A5.629,5.629,0,0,0,0,5.216a2.427,2.427,0,0,1,3.014-.107c-.008.257-.019.074,0,0s.064-.068,0,0A2.773,2.773,0,0,1,6.194,5.109Z" transform="translate(2.89 0)" fill="#d9eff7"/>
        </g>
      </g>
    </g>
    <g id="Grupo_207" data-name="Grupo 207" transform="translate(426.007 857.24)">
      <path id="Trazado_7-2" data-name="Trazado 7" d="M216.973-399.956l-4.978-20.078,34.872,10.417-4.774,9.174Z" transform="translate(9 -54)" fill="#8dd1e4"/>
      <g id="Grupo_5-2" data-name="Grupo 5" transform="translate(235.515 -462.737)">
        <ellipse id="Elipse_10-2" data-name="Elipse 10" cx="11" cy="4" rx="11" ry="4" transform="translate(0.478 2.497)" fill="#388caf"/>
        <ellipse id="Elipse_11-2" data-name="Elipse 11" cx="11" cy="4" rx="11" ry="4" transform="translate(0.478 2.497)" fill="#5abce6"/>
        <g id="Elipse_12-2" data-name="Elipse 12" transform="translate(0.478 2.497)" fill="none" stroke="#b4d6c8" strokeWidth="0.4">
          <ellipse cx="11" cy="4" rx="11" ry="4" stroke="none"/>
          <ellipse cx="11" cy="4" rx="10.8" ry="3.8" fill="none"/>
        </g>
        <path id="Trazado_4-2" data-name="Trazado 4" d="M249.153-386.134v-7.57" transform="translate(-244.243 395.147)" fill="none" stroke="#75c3e4" strokeWidth="0.4"/>
        <line id="Línea_2-2" data-name="Línea 2" x2="3.387" transform="translate(5.079 6.671)" fill="none" stroke="#75c3e4" strokeWidth="0.4"/>
        <line id="Línea_3-2" data-name="Línea 3" y1="7.252" transform="translate(8.466 1.542)" fill="none" stroke="#75c3e4" strokeWidth="0.4"/>
        <line id="Línea_4-2" data-name="Línea 4" x2="3.387" transform="translate(5.079 4.647)" fill="none" stroke="#75c3e4" strokeWidth="0.4"/>
        <line id="Línea_5-2" data-name="Línea 5" y1="2.419" transform="translate(2.659 1.542)" fill="none" stroke="#388caf" strokeWidth="0.4"/>
        <line id="Línea_6-2" data-name="Línea 6" y1="2.419" transform="translate(6.046 1.058)" fill="none" stroke="#388caf" strokeWidth="0.4"/>
        <path id="Trazado_5-2" data-name="Trazado 5" d="M244.508-394.69v.061l.037-.474a1.19,1.19,0,0,1,1.074-.583,1.1,1.1,0,0,1,1.136,1.058" transform="translate(-241.845 396.17)" fill="none" stroke="#75c3e4" strokeWidth="0.4"/>
        <path id="Trazado_6-2" data-name="Trazado 6" d="M244.494-394.727v.1a.662.662,0,0,1,.074-.394,1.19,1.19,0,0,1,1.063-.66,1.373,1.373,0,0,1,1.265,1.355c.015.031.031.5.031.5" transform="translate(-238.447 395.686)" fill="none" stroke="#75c3e4" strokeWidth="0.4"/>
      </g>
      <g id="Grupo_14-2" data-name="Grupo 14" transform="translate(227.858 -467.853)">
        <path id="Unión_2-2" data-name="Unión 2" d="M9.331,13.535H3.4a3.629,3.629,0,0,1,2.512-.952L5.37,4.845a2.544,2.544,0,0,0-2.482.627l0,.029-.016-.012a.211.211,0,0,0-.017.023c0-.013,0-.025,0-.038a2.21,2.21,0,0,0-2.848.563C-.122,3.187,2.174.632,5.369.013L5.392,0l.03.009c3.136-.056,5.917,1.868,6.434,4.582A2.158,2.158,0,0,0,9,4.716l.005.041a2.8,2.8,0,0,0-3.136.3L6.4,12.568a3.977,3.977,0,0,1,2.937.967h0ZM5.869,5.046c0-.007,0-.01,0-.01Z" transform="translate(0.563 0.622)" fill="none" stroke="#b4d6c8" strokeWidth="0.4"/>
        <rect id="Rectángulo_19-2" data-name="Rectángulo 19" width="0.484" height="8.71" transform="matrix(0.998, -0.07, 0.07, 0.998, 5.9, 4.991)" fill="#85afbe"/>
        <path id="Sustracción_1-2" data-name="Sustracción 1" d="M5.933.968H0A3.993,3.993,0,0,1,2.967,0,4,4,0,0,1,5.932.967Z" transform="translate(3.963 13.189)" fill="#3289ad"/>
        <g id="Grupo_12-2" data-name="Grupo 12" transform="matrix(0.995, -0.105, 0.105, 0.995, 0, 1.248)">
          <path id="Trazado_28-2" data-name="Trazado 28" d="M6,0C2.742.267.172,2.576,0,5.433A2.2,2.2,0,0,1,2.925,5.2,5.62,5.62,0,0,1,6,0Z" transform="translate(0 0.008)" fill="#388caf"/>
          <path id="Trazado_29-2" data-name="Trazado 29" d="M1.453.975a5.55,5.55,0,0,1,1.64,4.087,2.155,2.155,0,0,1,2.855.17C5.717,2.47,3.137.26,0,0A5.877,5.877,0,0,1,1.453.975Z" transform="translate(5.988 0.01)" fill="#388caf"/>
          <path id="Trazado_30-2" data-name="Trazado 30" d="M6.194,5.109A5.59,5.59,0,0,0,4.7,1.123,5.044,5.044,0,0,0,3.1,0a4.937,4.937,0,0,0-1.6,1.123A5.629,5.629,0,0,0,0,5.216a2.427,2.427,0,0,1,3.014-.107c-.008.257-.019.074,0,0s.064-.068,0,0A2.773,2.773,0,0,1,6.194,5.109Z" transform="translate(2.89 0)" fill="#d9eff7"/>
        </g>
      </g>
    </g>
  </g>
);


case "city-plan-level-3--1":
return (
<g id="Grupo_231" data-name="Grupo 231" transform="translate(-49 -597)">
    <rect id="Rectángulo_108" data-name="Rectángulo 108" width="53" height="180" transform="translate(49 597)" fill="none"/>
    <g id="Grupo_139" data-name="Grupo 139" transform="translate(43 564)">
      <g id="Grupo_46" data-name="Grupo 46" transform="translate(14 76)">
        <g id="Unión_22" data-name="Unión 22" transform="translate(0 0)" fill="none">
          <path d="M2.312,35V25.87H0V0H37V25.87H18.5V35Z" stroke="none"/>
          <path d="M 17.49966049194336 34 L 17.49966049194336 25.86977005004883 L 17.49966049194336 24.86977005004883 L 18.49966049194336 24.86977005004883 L 36 24.86977005004883 L 36 1 L 1 1 L 1 24.86977005004883 L 2.312279939651489 24.86977005004883 L 3.312279939651489 24.86977005004883 L 3.312279939651489 25.86977005004883 L 3.312279939651489 34 L 17.49966049194336 34 M 18.49966049194336 35 L 2.312279939651489 35 L 2.312279939651489 25.86977005004883 L 0 25.86977005004883 L 0 0 L 37 0 L 37 25.86977005004883 L 18.49966049194336 25.86977005004883 L 18.49966049194336 35 Z" stroke="none"/>
        </g>
      </g>
      <text id="_2" data-name="2" transform="translate(31 93)" fontSize="16" fontFamily="HelveticaNeue, Helvetica Neue"><tspan x="-4.448" y="0">2</tspan></text>
    </g>
    <g id="Grupo_140" data-name="Grupo 140" transform="translate(43 613)">
      <g id="Grupo_46-2" data-name="Grupo 46" transform="translate(14 76)">
        <g id="Unión_22-2" data-name="Unión 22" transform="translate(0 0)" fill="none">
          <path d="M2.312,35V25.87H0V0H37V25.87H18.5V35Z" stroke="none"/>
          <path d="M 17.49966049194336 34 L 17.49966049194336 25.86977005004883 L 17.49966049194336 24.86977005004883 L 18.49966049194336 24.86977005004883 L 36 24.86977005004883 L 36 1 L 1 1 L 1 24.86977005004883 L 2.312279939651489 24.86977005004883 L 3.312279939651489 24.86977005004883 L 3.312279939651489 25.86977005004883 L 3.312279939651489 34 L 17.49966049194336 34 M 18.49966049194336 35 L 2.312279939651489 35 L 2.312279939651489 25.86977005004883 L 0 25.86977005004883 L 0 0 L 37 0 L 37 25.86977005004883 L 18.49966049194336 25.86977005004883 L 18.49966049194336 35 Z" stroke="none"/>
        </g>
      </g>
      <text id="_5" data-name="5" transform="translate(31 93)" fontSize="16" fontFamily="HelveticaNeue, Helvetica Neue"><tspan x="-4.448" y="0">5</tspan></text>
    </g>
  </g>
);
case "city-plan-level-3--2":
return (
<g id="Grupo_232" data-name="Grupo 232" transform="translate(-108 -597)">
    <rect id="Rectángulo_109" data-name="Rectángulo 109" width="53" height="180" transform="translate(108 597)" fill="none"/>
    <g id="Grupo_143" data-name="Grupo 143" transform="translate(-241 494)">
      <g id="Grupo_84" data-name="Grupo 84" transform="translate(343 51)">
        <g id="Grupo_46" data-name="Grupo 46" transform="translate(14 76)">
          <g id="Unión_22" data-name="Unión 22" transform="translate(0 0)" fill="#fff">
            <path d="M 17.99966049194336 34.5 L 2.812279939651489 34.5 L 2.812279939651489 25.86977005004883 L 2.812279939651489 25.36977005004883 L 2.312279939651489 25.36977005004883 L 0.5 25.36977005004883 L 0.5 0.5 L 36.5 0.5 L 36.5 25.36977005004883 L 18.49966049194336 25.36977005004883 L 17.99966049194336 25.36977005004883 L 17.99966049194336 25.86977005004883 L 17.99966049194336 34.5 Z" stroke="none"/>
            <path d="M 17.49966049194336 34 L 17.49966049194336 25.86977005004883 L 17.49966049194336 24.86977005004883 L 18.49966049194336 24.86977005004883 L 36 24.86977005004883 L 36 1 L 1 1 L 1 24.86977005004883 L 2.312279939651489 24.86977005004883 L 3.312279939651489 24.86977005004883 L 3.312279939651489 25.86977005004883 L 3.312279939651489 34 L 17.49966049194336 34 M 18.49966049194336 35 L 2.312279939651489 35 L 2.312279939651489 25.86977005004883 L 0 25.86977005004883 L 0 0 L 37 0 L 37 25.86977005004883 L 18.49966049194336 25.86977005004883 L 18.49966049194336 35 Z" stroke="none"/>
          </g>
        </g>
        <text id="_1" data-name="1" transform="translate(31 94)" fontSize="16" fontFamily="HelveticaNeue, Helvetica Neue"><tspan x="-4.448" y="0">1</tspan></text>
      </g>
      <g id="Grupo_85" data-name="Grupo 85" transform="translate(343 99)">
        <g id="Grupo_46-2" data-name="Grupo 46" transform="translate(14 76)">
          <g id="Unión_22-2" data-name="Unión 22" transform="translate(0 0)" fill="#fff">
            <path d="M 17.99966049194336 34.5 L 2.812279939651489 34.5 L 2.812279939651489 25.86977005004883 L 2.812279939651489 25.36977005004883 L 2.312279939651489 25.36977005004883 L 0.5 25.36977005004883 L 0.5 0.5 L 36.5 0.5 L 36.5 25.36977005004883 L 18.49966049194336 25.36977005004883 L 17.99966049194336 25.36977005004883 L 17.99966049194336 25.86977005004883 L 17.99966049194336 34.5 Z" stroke="none"/>
            <path d="M 17.49966049194336 34 L 17.49966049194336 25.86977005004883 L 17.49966049194336 24.86977005004883 L 18.49966049194336 24.86977005004883 L 36 24.86977005004883 L 36 1 L 1 1 L 1 24.86977005004883 L 2.312279939651489 24.86977005004883 L 3.312279939651489 24.86977005004883 L 3.312279939651489 25.86977005004883 L 3.312279939651489 34 L 17.49966049194336 34 M 18.49966049194336 35 L 2.312279939651489 35 L 2.312279939651489 25.86977005004883 L 0 25.86977005004883 L 0 0 L 37 0 L 37 25.86977005004883 L 18.49966049194336 25.86977005004883 L 18.49966049194336 35 Z" stroke="none"/>
          </g>
        </g>
        <text id="_2" data-name="2" transform="translate(31 93)" fontSize="16" fontFamily="HelveticaNeue, Helvetica Neue"><tspan x="-4.448" y="0">2</tspan></text>
      </g>
      <g id="Grupo_87" data-name="Grupo 87" transform="translate(343 149)">
        <g id="Grupo_46-3" data-name="Grupo 46" transform="translate(14 76)">
          <g id="Unión_22-3" data-name="Unión 22" transform="translate(0 0)" fill="#fff">
            <path d="M 17.99966049194336 34.5 L 2.812279939651489 34.5 L 2.812279939651489 25.86977005004883 L 2.812279939651489 25.36977005004883 L 2.312279939651489 25.36977005004883 L 0.5 25.36977005004883 L 0.5 0.5 L 36.5 0.5 L 36.5 25.36977005004883 L 18.49966049194336 25.36977005004883 L 17.99966049194336 25.36977005004883 L 17.99966049194336 25.86977005004883 L 17.99966049194336 34.5 Z" stroke="none"/>
            <path d="M 17.49966049194336 34 L 17.49966049194336 25.86977005004883 L 17.49966049194336 24.86977005004883 L 18.49966049194336 24.86977005004883 L 36 24.86977005004883 L 36 1 L 1 1 L 1 24.86977005004883 L 2.312279939651489 24.86977005004883 L 3.312279939651489 24.86977005004883 L 3.312279939651489 25.86977005004883 L 3.312279939651489 34 L 17.49966049194336 34 M 18.49966049194336 35 L 2.312279939651489 35 L 2.312279939651489 25.86977005004883 L 0 25.86977005004883 L 0 0 L 37 0 L 37 25.86977005004883 L 18.49966049194336 25.86977005004883 L 18.49966049194336 35 Z" stroke="none"/>
          </g>
        </g>
        <text id="_6" data-name="6" transform="translate(31 93)" fontSize="16" fontFamily="HelveticaNeue, Helvetica Neue"><tspan x="-4.448" y="0">6</tspan></text>
      </g>
    </g>
    <rect id="Rectángulo_110" data-name="Rectángulo 110" width="53" height="180" transform="translate(108 597)" fill="none"/>
    <g id="Grupo_145" data-name="Grupo 145" transform="translate(-241 494)">
      <g id="Grupo_84-2" data-name="Grupo 84" transform="translate(343 51)">
        <g id="Grupo_46-4" data-name="Grupo 46" transform="translate(14 76)">
          <g id="Unión_22-4" data-name="Unión 22" transform="translate(0 0)" fill="none">
            <path d="M2.312,35V25.87H0V0H37V25.87H18.5V35Z" stroke="none"/>
            <path d="M 17.49966049194336 34 L 17.49966049194336 25.86977005004883 L 17.49966049194336 24.86977005004883 L 18.49966049194336 24.86977005004883 L 36 24.86977005004883 L 36 1 L 1 1 L 1 24.86977005004883 L 2.312279939651489 24.86977005004883 L 3.312279939651489 24.86977005004883 L 3.312279939651489 25.86977005004883 L 3.312279939651489 34 L 17.49966049194336 34 M 18.49966049194336 35 L 2.312279939651489 35 L 2.312279939651489 25.86977005004883 L 0 25.86977005004883 L 0 0 L 37 0 L 37 25.86977005004883 L 18.49966049194336 25.86977005004883 L 18.49966049194336 35 Z" stroke="none"/>
          </g>
        </g>
        <text id="_1-2" data-name="1" transform="translate(31 94)" fontSize="16" fontFamily="HelveticaNeue, Helvetica Neue"><tspan x="-4.448" y="0">1</tspan></text>
      </g>
      <g id="Grupo_85-2" data-name="Grupo 85" transform="translate(343 99)">
        <g id="Grupo_46-5" data-name="Grupo 46" transform="translate(14 76)">
          <g id="Unión_22-5" data-name="Unión 22" transform="translate(0 0)" fill="none">
            <path d="M2.312,35V25.87H0V0H37V25.87H18.5V35Z" stroke="none"/>
            <path d="M 17.49966049194336 34 L 17.49966049194336 25.86977005004883 L 17.49966049194336 24.86977005004883 L 18.49966049194336 24.86977005004883 L 36 24.86977005004883 L 36 1 L 1 1 L 1 24.86977005004883 L 2.312279939651489 24.86977005004883 L 3.312279939651489 24.86977005004883 L 3.312279939651489 25.86977005004883 L 3.312279939651489 34 L 17.49966049194336 34 M 18.49966049194336 35 L 2.312279939651489 35 L 2.312279939651489 25.86977005004883 L 0 25.86977005004883 L 0 0 L 37 0 L 37 25.86977005004883 L 18.49966049194336 25.86977005004883 L 18.49966049194336 35 Z" stroke="none"/>
          </g>
        </g>
        <text id="_2-2" data-name="2" transform="translate(31 93)" fontSize="16" fontFamily="HelveticaNeue, Helvetica Neue"><tspan x="-4.448" y="0">2</tspan></text>
      </g>
      <g id="Grupo_87-2" data-name="Grupo 87" transform="translate(343 149)">
        <g id="Grupo_46-6" data-name="Grupo 46" transform="translate(14 76)">
          <g id="Unión_22-6" data-name="Unión 22" transform="translate(0 0)" fill="none">
            <path d="M2.312,35V25.87H0V0H37V25.87H18.5V35Z" stroke="none"/>
            <path d="M 17.49966049194336 34 L 17.49966049194336 25.86977005004883 L 17.49966049194336 24.86977005004883 L 18.49966049194336 24.86977005004883 L 36 24.86977005004883 L 36 1 L 1 1 L 1 24.86977005004883 L 2.312279939651489 24.86977005004883 L 3.312279939651489 24.86977005004883 L 3.312279939651489 25.86977005004883 L 3.312279939651489 34 L 17.49966049194336 34 M 18.49966049194336 35 L 2.312279939651489 35 L 2.312279939651489 25.86977005004883 L 0 25.86977005004883 L 0 0 L 37 0 L 37 25.86977005004883 L 18.49966049194336 25.86977005004883 L 18.49966049194336 35 Z" stroke="none"/>
          </g>
        </g>
        <text id="_6-2" data-name="6" transform="translate(31 93)" fontSize="16" fontFamily="HelveticaNeue, Helvetica Neue"><tspan x="-4.448" y="0">6</tspan></text>
      </g>
    </g>
  </g>
);
case "city-plan-level-3--3":
return (
  <g id="Grupo_233" data-name="Grupo 233" transform="translate(-167 -597)">
    <rect id="Rectángulo_111" data-name="Rectángulo 111" width="53" height="180" transform="translate(167 597)" fill="none"/>
    <g id="Grupo_146" data-name="Grupo 146" transform="translate(161 564)">
      <g id="Grupo_46" data-name="Grupo 46" transform="translate(14 76)">
        <g id="Unión_22" data-name="Unión 22" transform="translate(0 0)" fill="none">
          <path d="M2.312,35V25.87H0V0H37V25.87H18.5V35Z" stroke="none"/>
          <path d="M 17.49966049194336 34 L 17.49966049194336 25.86977005004883 L 17.49966049194336 24.86977005004883 L 18.49966049194336 24.86977005004883 L 36 24.86977005004883 L 36 1 L 1 1 L 1 24.86977005004883 L 2.312279939651489 24.86977005004883 L 3.312279939651489 24.86977005004883 L 3.312279939651489 25.86977005004883 L 3.312279939651489 34 L 17.49966049194336 34 M 18.49966049194336 35 L 2.312279939651489 35 L 2.312279939651489 25.86977005004883 L 0 25.86977005004883 L 0 0 L 37 0 L 37 25.86977005004883 L 18.49966049194336 25.86977005004883 L 18.49966049194336 35 Z" stroke="none"/>
        </g>
      </g>
      <text id="_3" data-name="3" transform="translate(31 93)" fontSize="16" fontFamily="HelveticaNeue, Helvetica Neue"><tspan x="-4.448" y="0">3</tspan></text>
    </g>
    <g id="Grupo_147" data-name="Grupo 147" transform="translate(161 613)">
      <g id="Grupo_46-2" data-name="Grupo 46" transform="translate(14 76)">
        <g id="Unión_22-2" data-name="Unión 22" transform="translate(0 0)" fill="none">
          <path d="M2.312,35V25.87H0V0H37V25.87H18.5V35Z" stroke="none"/>
          <path d="M 17.49966049194336 34 L 17.49966049194336 25.86977005004883 L 17.49966049194336 24.86977005004883 L 18.49966049194336 24.86977005004883 L 36 24.86977005004883 L 36 1 L 1 1 L 1 24.86977005004883 L 2.312279939651489 24.86977005004883 L 3.312279939651489 24.86977005004883 L 3.312279939651489 25.86977005004883 L 3.312279939651489 34 L 17.49966049194336 34 M 18.49966049194336 35 L 2.312279939651489 35 L 2.312279939651489 25.86977005004883 L 0 25.86977005004883 L 0 0 L 37 0 L 37 25.86977005004883 L 18.49966049194336 25.86977005004883 L 18.49966049194336 35 Z" stroke="none"/>
        </g>
      </g>
      <text id="_4" data-name="4" transform="translate(31 93)" fontSize="16" fontFamily="HelveticaNeue, Helvetica Neue"><tspan x="-4.448" y="0">4</tspan></text>
    </g>
  </g>
);
case "city-plan-level-3--4":
return (
<g id="Grupo_234" data-name="Grupo 234" transform="translate(-226 -597)">
    <rect id="Rectángulo_112" data-name="Rectángulo 112" width="53" height="180" transform="translate(226 597)" fill="none"/>
    <g id="Grupo_149" data-name="Grupo 149" transform="translate(239.487 613.908)">
      <g id="Grupo_46" data-name="Grupo 46" transform="translate(0)">
        <g id="Unión_22" data-name="Unión 22" transform="translate(-0.487 0.092)" fill="none">
          <path d="M1.937,29V21.435H0V0H31V21.435H15.5V29Z" stroke="none"/>
          <path d="M 14.49971008300781 28 L 14.49971008300781 21.43495941162109 L 14.49971008300781 20.43495941162109 L 15.49971008300781 20.43495941162109 L 30 20.43495941162109 L 30 1 L 1 1 L 1 20.43495941162109 L 1.937319993972778 20.43495941162109 L 2.937319993972778 20.43495941162109 L 2.937319993972778 21.43495941162109 L 2.937319993972778 28 L 14.49971008300781 28 M 15.49971008300781 29 L 1.937319993972778 29 L 1.937319993972778 21.43495941162109 L -1.77635683940025e-15 21.43495941162109 L -1.77635683940025e-15 -1.77635683940025e-15 L 31 -1.77635683940025e-15 L 31 21.43495941162109 L 15.49971008300781 21.43495941162109 L 15.49971008300781 29 Z" stroke="none"/>
        </g>
      </g>
      <text id="_1" data-name="1" transform="translate(13.513 16.092)" fontSize="12" fontFamily="HelveticaNeue, Helvetica Neue"><tspan x="-3.336" y="0">1</tspan></text>
    </g>
    <g id="Grupo_150" data-name="Grupo 150" transform="translate(239.487 654.318)">
      <g id="Grupo_46-2" data-name="Grupo 46" transform="translate(0)">
        <g id="Unión_22-2" data-name="Unión 22" transform="translate(-0.487 -0.317)" fill="none">
          <path d="M1.937,29V21.435H0V0H31V21.435H15.5V29Z" stroke="none"/>
          <path d="M 14.49971008300781 28 L 14.49971008300781 21.43495941162109 L 14.49971008300781 20.43495941162109 L 15.49971008300781 20.43495941162109 L 30 20.43495941162109 L 30 1 L 1 1 L 1 20.43495941162109 L 1.937319993972778 20.43495941162109 L 2.937319993972778 20.43495941162109 L 2.937319993972778 21.43495941162109 L 2.937319993972778 28 L 14.49971008300781 28 M 15.49971008300781 29 L 1.937319993972778 29 L 1.937319993972778 21.43495941162109 L -1.77635683940025e-15 21.43495941162109 L -1.77635683940025e-15 -1.77635683940025e-15 L 31 -1.77635683940025e-15 L 31 21.43495941162109 L 15.49971008300781 21.43495941162109 L 15.49971008300781 29 Z" stroke="none"/>
        </g>
      </g>
      <text id="_2" data-name="2" transform="translate(13.513 14.683)" fontSize="12" fontFamily="HelveticaNeue, Helvetica Neue"><tspan x="-3.336" y="0">2</tspan></text>
    </g>
    <g id="Grupo_152" data-name="Grupo 152" transform="translate(239.487 694.727)">
      <g id="Grupo_46-3" data-name="Grupo 46" transform="translate(0)">
        <g id="Unión_22-3" data-name="Unión 22" transform="translate(-0.487 0.273)" fill="none">
          <path d="M1.937,29V21.435H0V0H31V21.435H15.5V29Z" stroke="none"/>
          <path d="M 14.49971008300781 28 L 14.49971008300781 21.43495941162109 L 14.49971008300781 20.43495941162109 L 15.49971008300781 20.43495941162109 L 30 20.43495941162109 L 30 1 L 1 1 L 1 20.43495941162109 L 1.937319993972778 20.43495941162109 L 2.937319993972778 20.43495941162109 L 2.937319993972778 21.43495941162109 L 2.937319993972778 28 L 14.49971008300781 28 M 15.49971008300781 29 L 1.937319993972778 29 L 1.937319993972778 21.43495941162109 L -1.77635683940025e-15 21.43495941162109 L -1.77635683940025e-15 -1.77635683940025e-15 L 31 -1.77635683940025e-15 L 31 21.43495941162109 L 15.49971008300781 21.43495941162109 L 15.49971008300781 29 Z" stroke="none"/>
        </g>
      </g>
      <text id="_2-2" data-name="2" transform="translate(13.513 15.273)" fontSize="12" fontFamily="HelveticaNeue, Helvetica Neue"><tspan x="-3.336" y="0">2</tspan></text>
    </g>
    <g id="Grupo_153" data-name="Grupo 153" transform="translate(239.487 735.136)">
      <g id="Grupo_46-4" data-name="Grupo 46" transform="translate(0)">
        <g id="Unión_22-4" data-name="Unión 22" transform="translate(-0.487 -0.136)" fill="none">
          <path d="M1.937,29V21.435H0V0H31V21.435H15.5V29Z" stroke="none"/>
          <path d="M 14.49971008300781 28 L 14.49971008300781 21.43495941162109 L 14.49971008300781 20.43495941162109 L 15.49971008300781 20.43495941162109 L 30 20.43495941162109 L 30 1 L 1 1 L 1 20.43495941162109 L 1.937319993972778 20.43495941162109 L 2.937319993972778 20.43495941162109 L 2.937319993972778 21.43495941162109 L 2.937319993972778 28 L 14.49971008300781 28 M 15.49971008300781 29 L 1.937319993972778 29 L 1.937319993972778 21.43495941162109 L -1.77635683940025e-15 21.43495941162109 L -1.77635683940025e-15 -1.77635683940025e-15 L 31 -1.77635683940025e-15 L 31 21.43495941162109 L 15.49971008300781 21.43495941162109 L 15.49971008300781 29 Z" stroke="none"/>
        </g>
      </g>
      <text id="_3" data-name="3" transform="translate(13.513 13.864)" fontSize="12" fontFamily="HelveticaNeue, Helvetica Neue"><tspan x="-3.336" y="0">3</tspan></text>
    </g>
  </g>
);
case "city-plan-level-3--5":
return (
  <g id="Grupo_235" data-name="Grupo 235" transform="translate(-285 -597)">
  <rect id="Rectángulo_113" data-name="Rectángulo 113" width="53" height="180" transform="translate(285 597)" fill="none"/>
  <rect id="Rectángulo_114" data-name="Rectángulo 114" width="53" height="180" transform="translate(285 597)" fill="none"/>
  <g id="Grupo_157" data-name="Grupo 157" transform="translate(-64 494)">
    <g id="Grupo_84" data-name="Grupo 84" transform="translate(343 51)">
      <g id="Grupo_46" data-name="Grupo 46" transform="translate(14 76)">
        <g id="Unión_22" data-name="Unión 22" transform="translate(0 0)" fill="none">
          <path d="M2.312,35V25.87H0V0H37V25.87H18.5V35Z" stroke="none"/>
          <path d="M 17.49966049194336 34 L 17.49966049194336 25.86977005004883 L 17.49966049194336 24.86977005004883 L 18.49966049194336 24.86977005004883 L 36 24.86977005004883 L 36 1 L 1 1 L 1 24.86977005004883 L 2.312279939651489 24.86977005004883 L 3.312279939651489 24.86977005004883 L 3.312279939651489 25.86977005004883 L 3.312279939651489 34 L 17.49966049194336 34 M 18.49966049194336 35 L 2.312279939651489 35 L 2.312279939651489 25.86977005004883 L 0 25.86977005004883 L 0 0 L 37 0 L 37 25.86977005004883 L 18.49966049194336 25.86977005004883 L 18.49966049194336 35 Z" stroke="none"/>
        </g>
      </g>
      <text id="_2" data-name="2" transform="translate(33 94)" fontSize="16" fontFamily="HelveticaNeue, Helvetica Neue"><tspan x="-4.448" y="0">2</tspan></text>
    </g>
    <g id="Grupo_85" data-name="Grupo 85" transform="translate(343 99)">
      <g id="Grupo_46-2" data-name="Grupo 46" transform="translate(14 76)">
        <g id="Unión_22-2" data-name="Unión 22" transform="translate(0 0)" fill="none">
          <path d="M2.312,35V25.87H0V0H37V25.87H18.5V35Z" stroke="none"/>
          <path d="M 17.49966049194336 34 L 17.49966049194336 25.86977005004883 L 17.49966049194336 24.86977005004883 L 18.49966049194336 24.86977005004883 L 36 24.86977005004883 L 36 1 L 1 1 L 1 24.86977005004883 L 2.312279939651489 24.86977005004883 L 3.312279939651489 24.86977005004883 L 3.312279939651489 25.86977005004883 L 3.312279939651489 34 L 17.49966049194336 34 M 18.49966049194336 35 L 2.312279939651489 35 L 2.312279939651489 25.86977005004883 L 0 25.86977005004883 L 0 0 L 37 0 L 37 25.86977005004883 L 18.49966049194336 25.86977005004883 L 18.49966049194336 35 Z" stroke="none"/>
        </g>
      </g>
      <text id="_3" data-name="3" transform="translate(31 93)" fontSize="16" fontFamily="HelveticaNeue, Helvetica Neue"><tspan x="-4.448" y="0">3</tspan></text>
    </g>
    <g id="Grupo_87" data-name="Grupo 87" transform="translate(343 149)">
      <g id="Grupo_46-3" data-name="Grupo 46" transform="translate(14 76)">
        <g id="Unión_22-3" data-name="Unión 22" transform="translate(0 0)" fill="none">
          <path d="M2.312,35V25.87H0V0H37V25.87H18.5V35Z" stroke="none"/>
          <path d="M 17.49966049194336 34 L 17.49966049194336 25.86977005004883 L 17.49966049194336 24.86977005004883 L 18.49966049194336 24.86977005004883 L 36 24.86977005004883 L 36 1 L 1 1 L 1 24.86977005004883 L 2.312279939651489 24.86977005004883 L 3.312279939651489 24.86977005004883 L 3.312279939651489 25.86977005004883 L 3.312279939651489 34 L 17.49966049194336 34 M 18.49966049194336 35 L 2.312279939651489 35 L 2.312279939651489 25.86977005004883 L 0 25.86977005004883 L 0 0 L 37 0 L 37 25.86977005004883 L 18.49966049194336 25.86977005004883 L 18.49966049194336 35 Z" stroke="none"/>
        </g>
      </g>
      <text id="_5" data-name="5" transform="translate(31 93)" fontSize="16" fontFamily="HelveticaNeue, Helvetica Neue"><tspan x="-4.448" y="0">5</tspan></text>
    </g>
  </g>
</g>
);
case "city-plan-level-3--6":
return (
  <g id="Grupo_236" data-name="Grupo 236" transform="translate(-344 -597)">
  <rect id="Rectángulo_115" data-name="Rectángulo 115" width="53" height="180" transform="translate(344 597)" fill="none"/>
  <g id="Grupo_159" data-name="Grupo 159" transform="translate(-5 494)">
    <g id="Grupo_84" data-name="Grupo 84" transform="translate(343 51)">
      <g id="Grupo_46" data-name="Grupo 46" transform="translate(14 76)">
        <g id="Unión_22" data-name="Unión 22" transform="translate(0 0)" fill="none">
          <path d="M2.312,35V25.87H0V0H37V25.87H18.5V35Z" stroke="none"/>
          <path d="M 17.49966049194336 34 L 17.49966049194336 25.86977005004883 L 17.49966049194336 24.86977005004883 L 18.49966049194336 24.86977005004883 L 36 24.86977005004883 L 36 1 L 1 1 L 1 24.86977005004883 L 2.312279939651489 24.86977005004883 L 3.312279939651489 24.86977005004883 L 3.312279939651489 25.86977005004883 L 3.312279939651489 34 L 17.49966049194336 34 M 18.49966049194336 35 L 2.312279939651489 35 L 2.312279939651489 25.86977005004883 L 0 25.86977005004883 L 0 0 L 37 0 L 37 25.86977005004883 L 18.49966049194336 25.86977005004883 L 18.49966049194336 35 Z" stroke="none"/>
        </g>
      </g>
      <text id="_1" data-name="1" transform="translate(31 94)" fontSize="16" fontFamily="HelveticaNeue, Helvetica Neue"><tspan x="-4.448" y="0">1</tspan></text>
    </g>
    <g id="Grupo_85" data-name="Grupo 85" transform="translate(343 99)">
      <g id="Grupo_46-2" data-name="Grupo 46" transform="translate(14 76)">
        <g id="Unión_22-2" data-name="Unión 22" transform="translate(0 0)" fill="none">
          <path d="M2.312,35V25.87H0V0H37V25.87H18.5V35Z" stroke="none"/>
          <path d="M 17.49966049194336 34 L 17.49966049194336 25.86977005004883 L 17.49966049194336 24.86977005004883 L 18.49966049194336 24.86977005004883 L 36 24.86977005004883 L 36 1 L 1 1 L 1 24.86977005004883 L 2.312279939651489 24.86977005004883 L 3.312279939651489 24.86977005004883 L 3.312279939651489 25.86977005004883 L 3.312279939651489 34 L 17.49966049194336 34 M 18.49966049194336 35 L 2.312279939651489 35 L 2.312279939651489 25.86977005004883 L 0 25.86977005004883 L 0 0 L 37 0 L 37 25.86977005004883 L 18.49966049194336 25.86977005004883 L 18.49966049194336 35 Z" stroke="none"/>
        </g>
      </g>
      <text id="_2" data-name="2" transform="translate(31 93)" fontSize="16" fontFamily="HelveticaNeue, Helvetica Neue"><tspan x="-4.448" y="0">2</tspan></text>
    </g>
    <g id="Grupo_87" data-name="Grupo 87" transform="translate(343 149)">
      <g id="Grupo_46-3" data-name="Grupo 46" transform="translate(14 76)">
        <g id="Unión_22-3" data-name="Unión 22" transform="translate(0 0)" fill="none">
          <path d="M2.312,35V25.87H0V0H37V25.87H18.5V35Z" stroke="none"/>
          <path d="M 17.49966049194336 34 L 17.49966049194336 25.86977005004883 L 17.49966049194336 24.86977005004883 L 18.49966049194336 24.86977005004883 L 36 24.86977005004883 L 36 1 L 1 1 L 1 24.86977005004883 L 2.312279939651489 24.86977005004883 L 3.312279939651489 24.86977005004883 L 3.312279939651489 25.86977005004883 L 3.312279939651489 34 L 17.49966049194336 34 M 18.49966049194336 35 L 2.312279939651489 35 L 2.312279939651489 25.86977005004883 L 0 25.86977005004883 L 0 0 L 37 0 L 37 25.86977005004883 L 18.49966049194336 25.86977005004883 L 18.49966049194336 35 Z" stroke="none"/>
        </g>
      </g>
      <text id="_6" data-name="6" transform="translate(31 93)" fontSize="16" fontFamily="HelveticaNeue, Helvetica Neue"><tspan x="-4.448" y="0">6</tspan></text>
    </g>
  </g>
  <rect id="Rectángulo_116" data-name="Rectángulo 116" width="53" height="180" transform="translate(344 597)" fill="none"/>
</g>
);

    default:
      return <path />;
  }
};

const SVGIcon = ({
  name = "",
  style = {},
  fill = "#000",
  viewBox = "",
  width = "100%",
  className = "",
  height = "100%"
}) => (
  <svg
    width={width}
    style={style}
    height={height}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox || getViewBox(name)}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    {getPath(name, { fill })}
  </svg>
);

export default SVGIcon;