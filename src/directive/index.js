import Vue from "vue";
import style from "./style";
import document from "./document";

const installDirective=()=>{
    Vue.directive("style",style)
    Vue.directive("document",document)
}

export default installDirective