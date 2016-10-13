
<home>
    <div class="container">
        <div class="row">
            <div class="text-center">
                <logo></logo>
                <form oninput={changeTitle}>
                    <input class="form-control input-lg" type="text" name="newTitle" placeholder="FE.PT.GF FE.PT.GF...">
                    <!--<ui-input placeholder="placeholder" value="content" lg></ui-input>-->
                </form>
                <!--
                <search></search>
                -->
            </div>
        </div>
    </div>

    <footer>
        <p>
            {this.opts.store.getState().title}
        </p>
    </footer>

    changeTitle() {
        this.opts.store.dispatch({type:'CHANGE_TITLE', data:this.newTitle.value})
    }

    <style type="text/less">
        @import "src/style/less/variables.less";
    </style>

</home>
