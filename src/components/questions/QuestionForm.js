import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';

class QuestionForm extends React.Component {

    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }
    
    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        );
    };

    renderTextArea = ({textarea, label, meta}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
        <div className={className}>
            <label>{label}</label>
            <textarea {...textarea} placeholder="Content" rows="10" cols="40"></textarea>
            {this.renderError(meta)}
        </div>
        )
    };

    renderAlternative = ({ input, placeholder, tagLabel, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className="ui item">
                <div className="ui right labeled left icon input">
                    <i className="tags icon"></i>
                    <input {...input} className={className} autoComplete="off" placeholder={placeholder} />
                    <a className="ui tag label">
                        {tagLabel}
                    </a>
                    {this.renderError(meta)}
                </div>
            </div>
        );
    };

    renderAlternatives = ({fields, meta: {error}}) => {
        return (
            <div>
                <div className="ui item">
                    <button title="Add a new alternative" type="button" onClick={() => fields.push()}>Add item</button>
                </div>
                {fields.map((alternative, index) => (
                    <div className="ui item" key={index}>
                        <i className="close icon" />
                        <button
                            type="button"
                            title="Remove alternative"
                            onClick={() => fields.remove(index)}>
                            Remove
                        </button>
                        <Field
                            name={alternative}
                            component={this.renderAlternative}
                            placeholder={`Alternative #${index + 1}`}
                            tagLabel="Mark as correct"
                        />
                    </div>
                ))}
            </div>
            
        );
    };
    
    onSubmit = formValues => {
        this.props.onSubmit(formValues);
    };
    
    render() {
        return (
            <form
                onSubmit={this.props.handleSubmit(this.onSubmit)}
                className="ui form error"
            >
                <Field name="header" component={this.renderInput} label="Institution / year" />
                <Field name="statement" component={this.renderInput} label="Statement" />

                <FieldArray name="alternatives" component={this.renderAlternatives} />
                
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

const validate = formValues => {
    const errors = {};

    if (!formValues.header) {
        errors.header = 'You must enter a institution / year';
    }

    if (!formValues.statement) {
        errors.statement = 'You must enter a statement';
    }

    return errors;
};

export default reduxForm({
    form: 'questionForm',
    validate
})(QuestionForm);